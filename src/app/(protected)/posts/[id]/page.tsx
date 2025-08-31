'use client';

import { PostDetails } from '@/src/app/(protected)/posts/[id]/components/PostDetails';
import { usePost } from '@/src/app/(protected)/posts/[id]/hooks/usePosts';
import { Header } from '@/src/components/organisms/Header';
import { useParams } from 'next/navigation';

export default function PostDetailPage() {
	const params = useParams();

	const postId = parseInt(params.id as string);

	const { data: post, isLoading, error } = usePost(String(postId));

	if (error) {
		return (
			<div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
				<Header />
				<div className="container mx-auto px-4 py-8">
					<div className="text-center">
						<h1 className="text-2xl font-bold text-red-600 mb-4">
							Failed to load post
						</h1>
						<p className="text-gray-600">Please try again later.</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
			<Header />
			<PostDetails
				post={post || ({} as any)}
				isLoading={isLoading}
				error={!!error}
			/>
		</div>
	);
}
