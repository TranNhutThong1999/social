'use client';

import { LoadingSpinner } from '@/src/components/atoms/LoadingSpinner';
import { CommentsSection } from '@/modules/comments/components/CommentsSection';
import { PostDetailContent } from '@/modules/posts/components/PostDetailContent';
import { Post } from '../../../src/types/types';

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
		<main className="container mx-auto">
			<div className="lg:max-w-6xl mx-auto">
				<div className="fade-in">
					<div className="bg-white rounded-xl shadow-lg overflow-hidden">
						<PostDetailContent post={post} />
						<CommentsSection postId={post.id} />
					</div>
				</div>
			</div>
		</main>
	);
}
