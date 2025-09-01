export function PostCardSkeleton() {
	return (
		<article className="h-full">
			<article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col animate-pulse">
				{/* Card Header Skeleton */}
				<header className="bg-gradient-to-r from-indigo-50 to-purple-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
					{/* Title skeleton */}
					<div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
					<div className="h-5 bg-gray-200 rounded mb-2 w-1/2"></div>

					<aside className="flex justify-between items-center sm:justify-between space-y-2 sm:space-y-0">
						{/* Avatar skeleton */}
						<div className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-gray-200 rounded-full"></div>
							<div className="h-4 bg-gray-200 rounded w-20"></div>
						</div>
						{/* Date skeleton */}
						<div className="flex items-center">
							<div className="w-3 h-3 bg-gray-200 rounded mr-1"></div>
							<div className="h-4 bg-gray-200 rounded w-16"></div>
						</div>
					</aside>
				</header>

				{/* Card Body Skeleton */}
				<section className="p-4 sm:p-6 flex-grow flex flex-col">
					{/* Content skeleton */}
					<div className="space-y-2 mb-4 sm:mb-6 flex-grow">
						<div className="h-4 bg-gray-200 rounded w-full"></div>
						<div className="h-4 bg-gray-200 rounded w-5/6"></div>
						<div className="h-4 bg-gray-200 rounded w-4/6"></div>
					</div>

					{/* Card Footer Skeleton */}
					<footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
						<aside className="flex items-center space-x-4">
							{/* Comments count skeleton */}
							<div className="h-6 bg-gray-200 rounded-full w-20"></div>
						</aside>

						{/* Read more skeleton */}
						<div className="flex items-center">
							<div className="h-4 bg-gray-200 rounded w-16 mr-1"></div>
							<div className="w-3 h-3 bg-gray-200 rounded"></div>
						</div>
					</footer>
				</section>
			</article>
		</article>
	);
}
