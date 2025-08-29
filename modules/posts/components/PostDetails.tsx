'use client';

import {
	CommentsSection,
	LoadingSpinner,
	PostDetailContent,
} from '@/modules/shared/components';
import { Spinner } from '@/modules/shared/components/ui/Spinner';
import { useRouter } from 'next/navigation';
import { Post } from '../types';

interface IProps {
	post: Post;
	isLoading?: boolean;
	error?: boolean;
}

export function PostDetails(props: IProps) {
	const { post, isLoading = false, error = false } = props;
	const router = useRouter();

	if (isLoading) {
		return (
			<div className="flex justify-center py-8">
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
				{error}
			</div>
		);
	}

	if (!post) {
		return (
			<div className="text-center py-8 text-gray-500">
				Post not found.
			</div>
		);
	}

	return (
		<main className="container mx-auto px-4 py-8">
			<div className="lg:max-w-6xl mx-auto">
				{isLoading ? (
					<div className="flex justify-center py-12">
						<LoadingSpinner />
					</div>
				) : post ? (
					<div className="fade-in">
						{/* Back Button */}
						<div className="mb-6">
							<button
								onClick={() => router.push('/')}
								className="bg-gray-500 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition inline-flex items-center"
							>
								<i className="fas fa-arrow-left mr-2"></i>
								Back to Home
							</button>
						</div>

						<div className="bg-white rounded-xl shadow-lg overflow-hidden">
							<PostDetailContent post={post} />
							<CommentsSection postId={post.id} />
						</div>
					</div>
				) : (
					<div className="text-center">
						<h1 className="text-2xl font-bold text-gray-900 mb-4">
							Post not found
						</h1>
						<p className="text-gray-600">
							The post you are looking for does not exist.
						</p>
					</div>
				)}
			</div>
		</main>
	);
}
