'use client';

import { PostDetails } from '@/modules/posts/components/PostDetails';
import { usePost } from '@/modules/posts/hooks/usePosts';
import { useParams } from 'next/navigation';

export default function PostDetailPage() {
	const { id: postId } = useParams();
	const { data: post, isLoading, error } = usePost(String(postId));

	if (error) {
		return (
			<article className="container mx-auto px-4 py-8">
				<section className="text-center">
					<h1 className="text-2xl font-bold text-red-600 mb-4">
						Failed to load post
					</h1>
					<p className="text-gray-600">Please try again later.</p>
				</section>
			</article>
		);
	}

	return (
		<PostDetails
			post={post || ({} as any)}
			isLoading={isLoading}
			error={!!error}
		/>
	);
}
