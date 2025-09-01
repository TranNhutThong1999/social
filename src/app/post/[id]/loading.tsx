export default function Loading() {
	return (
		<main className="container mx-auto">
			<article className="lg:max-w-6xl mx-auto">
				<section className="fade-in">
					<article className="bg-white rounded-xl shadow-lg overflow-hidden">
						{/* Post Content Skeleton */}
						<article className="p-4 sm:p-6 lg:p-8">
							{/* Navigation Skeleton */}
							<nav className="flex items-center justify-between mb-4 sm:mb-6">
								<div className="flex items-center">
									<div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-200 rounded mr-2 animate-pulse"></div>
									<div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
								</div>
							</nav>

							{/* Title Skeleton */}
							<div className="mb-4">
								<div className="h-8 sm:h-10 lg:h-12 bg-gray-200 rounded animate-pulse mb-2"></div>
								<div className="h-8 sm:h-10 lg:h-12 bg-gray-200 rounded animate-pulse w-3/4"></div>
							</div>

							{/* Header Skeleton */}
							<header className="flex justify-between items-center text-gray-600 mb-4 sm:mb-6">
								{/* Avatar and Author */}
								<div className="flex items-center">
									<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full animate-pulse mr-3"></div>
									<div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
								</div>

								{/* Date */}
								<div className="flex items-center">
									<div className="w-4 h-4 bg-gray-200 rounded mr-2 animate-pulse"></div>
									<div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
								</div>
							</header>

							{/* Content Skeleton */}
							<section className="space-y-3">
								<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
								<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
								<div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
								<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
								<div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
								<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
								<div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
								<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
								<div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
							</section>
						</article>

						{/* Comments Section Skeleton */}
						<section className="border-t border-gray-200 p-3 sm:p-4 md:p-6 lg:p-8">
							{/* Comments Title */}
							<div className="h-6 sm:h-7 md:h-8 bg-gray-200 rounded animate-pulse mb-3 sm:mb-4 md:mb-6 w-24"></div>

							{/* Comment Form or Sign In Skeleton */}
							<div className="mb-6 sm:mb-8">
								<div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6">
									<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
										<div className="flex-1">
											<div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-32"></div>
											<div className="h-3 bg-gray-200 rounded animate-pulse w-48"></div>
										</div>
										<div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
									</div>
								</div>
							</div>

							{/* Comments List Skeleton */}
							<div className="space-y-4">
								{/* Comment 1 */}
								<div className="border-b border-gray-100 pb-4">
									<div className="flex items-start space-x-3">
										<div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
										<div className="flex-1">
											<div className="flex items-center space-x-2 mb-2">
												<div className="w-20 h-3 bg-gray-200 rounded animate-pulse"></div>
												<div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
											</div>
											<div className="space-y-2">
												<div className="h-3 bg-gray-200 rounded animate-pulse"></div>
												<div className="h-3 bg-gray-200 rounded animate-pulse w-4/5"></div>
											</div>
										</div>
									</div>
								</div>

								{/* Comment 2 */}
								<div className="border-b border-gray-100 pb-4">
									<div className="flex items-start space-x-3">
										<div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
										<div className="flex-1">
											<div className="flex items-center space-x-2 mb-2">
												<div className="w-24 h-3 bg-gray-200 rounded animate-pulse"></div>
												<div className="w-14 h-3 bg-gray-200 rounded animate-pulse"></div>
											</div>
											<div className="space-y-2">
												<div className="h-3 bg-gray-200 rounded animate-pulse"></div>
												<div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
												<div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
											</div>
										</div>
									</div>
								</div>

								{/* Comment 3 */}
								<div>
									<div className="flex items-start space-x-3">
										<div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
										<div className="flex-1">
											<div className="flex items-center space-x-2 mb-2">
												<div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
												<div className="w-18 h-3 bg-gray-200 rounded animate-pulse"></div>
											</div>
											<div className="space-y-2">
												<div className="h-3 bg-gray-200 rounded animate-pulse"></div>
												<div className="h-3 bg-gray-200 rounded animate-pulse w-5/6"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</article>
				</section>
			</article>
		</main>
	);
}
