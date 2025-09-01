interface AuthSkeletonProps {
	type: 'login' | 'register';
}

export function AuthSkeleton({ type }: AuthSkeletonProps) {
	return (
		<main>
			<article className="max-w-md mx-auto">
				<section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 ">
					{/* Title skeleton */}
					<div className="text-center mb-4 sm:mb-6">
						<div className="h-8 sm:h-9 bg-gray-200 rounded-lg mx-auto w-32 animate-pulse"></div>
					</div>

					{/* Form skeleton */}
					<div className="space-y-4">
						{/* Input fields skeleton */}
						{type === 'register' && (
							<div className="space-y-2">
								<div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
								<div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
							</div>
						)}

						{/* Email field */}
						<div className="space-y-2">
							<div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
							<div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
						</div>

						{/* Password field */}
						<div className="space-y-2">
							<div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
							<div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
						</div>

						{/* Confirm password field (register only) */}
						{type === 'register' && (
							<div className="space-y-2">
								<div className="h-4 bg-gray-200 rounded w-28 animate-pulse"></div>
								<div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
							</div>
						)}

						{/* Button skeleton */}
						<div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
					</div>

					{/* Link text skeleton */}
					<div className="text-center mt-4">
						<div className="h-4 bg-gray-200 rounded w-48 mx-auto animate-pulse"></div>
					</div>

					{/* Demo accounts section (login only) */}
					{type === 'login' && (
						<aside className="mt-6 p-3 sm:p-4 bg-gray-100 rounded-lg">
							<div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
							<div className="space-y-1">
								<div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
								<div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
							</div>
						</aside>
					)}
				</section>
			</article>
		</main>
	);
}
