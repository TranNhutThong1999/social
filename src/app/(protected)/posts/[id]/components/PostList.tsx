'use client';

import { LoadingSpinner } from '@/src/components/atoms/LoadingSpinner';
import { Post } from '../../../../../types/types';
import { PostCard } from './PostCard';

interface IProps {
	posts: Post[];
	isLoading?: boolean;
	loadMore?: () => void;
}
export function PostList(props: IProps) {
	const { posts, isLoading } = props;

	if (isLoading && posts.length === 0) {
		return (
			<div className="flex justify-center py-8">
				<LoadingSpinner />
			</div>
		);
	}

	if (posts.length === 0) {
		return (
			<div className="text-center py-8 text-gray-500">
				No posts found.
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}
