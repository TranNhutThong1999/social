'use client';

import { PostListSkeleton } from '@/src/components/molecules/PostListSkeleton';
import { Post } from '../../../src/types/types';
import { PostCard } from './PostCard';

interface IProps {
	posts: Post[];
	isLoading?: boolean;
	loadMore?: () => void;
}
export function PostList(props: IProps) {
	const { posts, isLoading } = props;

	if (isLoading && posts.length === 0) {
		return <PostListSkeleton count={6} />;
	}

	if (posts.length === 0) {
		return (
			<section className="text-center py-8 text-gray-500">
				No posts found.
			</section>
		);
	}

	return (
		<article className="space-y-6">
			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 auto-rows-fr">
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</section>
		</article>
	);
}
