'use client';

import { Spinner } from '@/modules/shared/components/ui/Spinner';
import { Post } from '../types';
import { PostCard } from './PostCard';

interface IProps {
	posts: Post[];
	isLoading?: boolean;
	error?: string;
	hasMore?: boolean;
	loadMore?: () => void;
}
export function PostList(props: IProps) {
	const { posts, isLoading, error, hasMore, loadMore } = props;

	if (isLoading && posts.length === 0) {
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

	if (posts.length === 0) {
		return (
			<div className="text-center py-8 text-gray-500">
				No posts found.
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>

			{hasMore && (
				<div className="flex justify-center">
					<button
						onClick={loadMore}
						disabled={isLoading}
						className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
					>
						{isLoading ? 'Loading...' : 'Load more'}
					</button>
				</div>
			)}
		</div>
	);
}
