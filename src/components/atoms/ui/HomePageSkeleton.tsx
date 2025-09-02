import { SkeletonCard, SkeletonText, SkeletonAvatar } from './index';

export function HomePageSkeleton() {
  return (
    <article className="max-w-7xl mx-auto">
      {/* Header Skeleton */}
      <header className="mb-6 sm:mb-8">
        <div className="text-center">
          <SkeletonText size="xl" width="1/2" className="mx-auto mb-2" />
          <SkeletonText size="sm" width="2/3" className="mx-auto" />
        </div>
      </header>

      {/* Search and Filter Skeleton */}
      <div className="mb-6">
        <SkeletonCard variant="compact" padding="md" className="mb-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <SkeletonText size="md" width="1/3" />
            <SkeletonText size="md" width="1/4" />
            <SkeletonText size="md" width="1/6" />
          </div>
        </SkeletonCard>
      </div>

      {/* Posts Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} variant="detailed" padding="lg">
            {/* Post Header */}
            <div className="flex items-center gap-3 mb-4">
              <SkeletonAvatar size="md" />
              <div className="flex-1">
                <SkeletonText size="sm" width="2/3" className="mb-1" />
                <SkeletonText size="xs" width="1/2" />
              </div>
            </div>

            {/* Post Image */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-300 rounded-lg animate-pulse mb-4" />

            {/* Post Title */}
            <SkeletonText size="lg" width="full" className="mb-3" />

            {/* Post Content */}
            <div className="space-y-2 mb-4">
              <SkeletonText size="md" width="full" />
              <SkeletonText size="md" width="3/4" />
              <SkeletonText size="md" width="1/2" />
            </div>

            {/* Post Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SkeletonText size="sm" width="1/4" />
                <SkeletonText size="sm" width="1/6" />
              </div>
              <SkeletonText size="sm" width="1/4" />
            </div>
          </SkeletonCard>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2">
          <SkeletonText size="md" width="1/6" />
          <SkeletonText size="md" width="1/6" />
          <SkeletonText size="md" width="1/6" />
          <SkeletonText size="md" width="1/6" />
        </div>
      </div>
    </article>
  );
}
