'use client';

import { LoadingSpinner } from '@/src/components/atoms/LoadingSpinner';
import { CommentsSection } from '@/modules/comments/components/CommentsSection';
import { PostDetailContent } from '@/src/app/(protected)/posts/[id]/components/PostDetailContent';
import { Post } from '../../../../../types/types';

interface IProps {
	post: Post;
	isLoading?: boolean;
	error?: boolean;
}

export function PostDetails(props: IProps) {
	const { post, isLoading = false, error = false } = props;

	if (isLoading) {
		return (
			<div className="flex justify-center py-8">
				<LoadingSpinner />
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
		<main className="container mx-auto px-4 py-6 sm:py-8">
			<div className="lg:max-w-6xl mx-auto">
				{isLoading ? (
					<div className="flex justify-center py-8 sm:py-12">
						<LoadingSpinner />
					</div>
				) : post ? (
					<div className="fade-in">
						<div className="bg-white rounded-xl shadow-lg overflow-hidden">
							<PostDetailContent post={post} />
							<CommentsSection postId={post.id} />
						</div>
					</div>
				) : (
					<div className="text-center">
						<h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
							Post not found
						</h1>
						<p className="text-gray-600 text-sm sm:text-base">
							The post you are looking for does not exist.
						</p>
					</div>
				)}
			</div>
		</main>
	);
}
