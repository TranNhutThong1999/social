import { SkeletonText, SkeletonAvatar, SkeletonIcon } from '../../atoms';

export function PostDetailSkeleton() {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Post Content Skeleton */}
      <article className="p-4 sm:p-6 lg:p-8">
        {/* Navigation Skeleton */}
        <nav className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center">
            <SkeletonIcon size="sm" className="mr-2" />
            <SkeletonText size="sm" width="custom" customWidth="w-16" />
          </div>
        </nav>

        {/* Title Skeleton */}
        <div className="mb-4">
          <SkeletonText size="xl" className="mb-2" />
          <SkeletonText size="xl" width="3/4" />
        </div>

        {/* Header Skeleton */}
        <header className="flex justify-between items-center text-gray-600 mb-4 sm:mb-6">
          {/* Avatar and Author */}
          <div className="flex items-center">
            <SkeletonAvatar size="lg" className="mr-3" />
            <SkeletonText size="md" width="custom" customWidth="w-24" />
          </div>

          {/* Date */}
          <div className="flex items-center">
            <SkeletonIcon size="sm" className="mr-2" />
            <SkeletonText size="md" width="custom" customWidth="w-20" />
          </div>
        </header>

        {/* Content Skeleton */}
        <section className="space-y-3">
          <SkeletonText />
          <SkeletonText />
          <SkeletonText width="5/6" />
          <SkeletonText />
          <SkeletonText width="4/5" />
          <SkeletonText />
          <SkeletonText width="3/4" />
          <SkeletonText />
          <SkeletonText width="5/6" />
        </section>
      </article>
    </article>
  );
}
