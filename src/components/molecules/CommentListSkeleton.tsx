export function CommentListSkeleton() {
	return (
		<section className="space-y-3 sm:space-y-4">
			{/* Generate 3 skeleton comment items */}
			{Array.from({ length: 3 }).map((_, index) => (
				<article
					key={index}
					className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 animate-pulse"
				>
					<header className="flex items-center mb-2 sm:mb-3">
						{/* Avatar skeleton */}
						<div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
						{/* Timestamp skeleton */}
						<div className="h-4 bg-gray-200 rounded w-20 ml-2"></div>
					</header>
					{/* Comment text skeleton */}
					<div className="ml-11 space-y-2">
						<div className="h-4 bg-gray-200 rounded w-full"></div>
						<div className="h-4 bg-gray-200 rounded w-5/6"></div>
						<div className="h-4 bg-gray-200 rounded w-4/6"></div>
					</div>
				</article>
			))}
		</section>
	);
}
