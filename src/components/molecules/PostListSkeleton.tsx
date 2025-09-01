import { PostCardSkeleton } from './PostCardSkeleton';

interface PostListSkeletonProps {
	count?: number;
}

export function PostListSkeleton({ count = 6 }: PostListSkeletonProps) {
	return (
		<article className="space-y-6">
			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 auto-rows-fr">
				{Array.from({ length: count }).map((_, index) => (
					<PostCardSkeleton key={index} />
				))}
			</section>
		</article>
	);
}
