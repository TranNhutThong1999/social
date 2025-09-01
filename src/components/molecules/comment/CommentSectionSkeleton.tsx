import { SkeletonText, SkeletonAvatar, SkeletonButton } from '../../atoms';

export function CommentSectionSkeleton() {
	return (
		<section className="border-t border-gray-200 p-3 sm:p-4 md:p-6 lg:p-8">
			{/* Comments Title */}
			<SkeletonText size="lg" width="custom" customWidth="w-24" className="mb-3 sm:mb-4 md:mb-6" />

			{/* Comment Form or Sign In Skeleton */}
			<div className="mb-6 sm:mb-8">
				<div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
						<div className="flex-1">
							<SkeletonText size="md" width="custom" customWidth="w-32" className="mb-2" />
							<SkeletonText size="sm" width="custom" customWidth="w-48" />
						</div>
						<SkeletonButton size="md" variant="rounded" width="custom" customWidth="w-20" />
					</div>
				</div>
			</div>

			{/* Comments List Skeleton */}
			<div className="space-y-4">
				{/* Comment 1 */}
				<div className="border-b border-gray-100 pb-4">
					<div className="flex items-start space-x-3">
						<SkeletonAvatar size="sm" className="flex-shrink-0" />
						<div className="flex-1">
							<div className="flex items-center space-x-2 mb-2">
								<SkeletonText size="sm" width="custom" customWidth="w-20" />
								<SkeletonText size="sm" width="custom" customWidth="w-16" />
							</div>
							<div className="space-y-2">
								<SkeletonText size="sm" />
								<SkeletonText size="sm" width="4/5" />
							</div>
						</div>
					</div>
				</div>

				{/* Comment 2 */}
				<div className="border-b border-gray-100 pb-4">
					<div className="flex items-start space-x-3">
						<SkeletonAvatar size="sm" className="flex-shrink-0" />
						<div className="flex-1">
							<div className="flex items-center space-x-2 mb-2">
								<SkeletonText size="sm" width="custom" customWidth="w-24" />
								<SkeletonText size="sm" width="custom" customWidth="w-14" />
							</div>
							<div className="space-y-2">
								<SkeletonText size="sm" />
								<SkeletonText size="sm" width="3/4" />
								<SkeletonText size="sm" width="1/2" />
							</div>
						</div>
					</div>
				</div>

				{/* Comment 3 */}
				<div>
					<div className="flex items-start space-x-3">
						<SkeletonAvatar size="sm" className="flex-shrink-0" />
						<div className="flex-1">
							<div className="flex items-center space-x-2 mb-2">
								<SkeletonText size="sm" width="custom" customWidth="w-16" />
								<SkeletonText size="sm" width="custom" customWidth="w-18" />
							</div>
							<div className="space-y-2">
								<SkeletonText size="sm" />
								<SkeletonText size="sm" width="5/6" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
