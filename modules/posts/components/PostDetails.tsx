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
			<section className="flex flex-col  justify-center py-8">
				<LoadingSpinner />
				<p className="text-sm text-gray-500 font-medium mt-4 text-center">
					Loading amazing content...
				</p>
			</section>
		);
	}

	if (error) {
		return (
			<aside className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
				{error}
			</aside>
		);
	}

	if (!post) {
		return (
			<section className="text-center py-8 text-gray-500">
				Post not found.
			</section>
		);
	}

	return (
		<main className="container mx-auto">
			<article className="lg:max-w-6xl mx-auto">
				<section className="fade-in">
					<article className="bg-white rounded-xl shadow-lg overflow-hidden">
						<PostDetailContent post={post} />
						<CommentsSection postId={post.id} />
					</article>
				</section>
			</article>
		</main>
	);
}
