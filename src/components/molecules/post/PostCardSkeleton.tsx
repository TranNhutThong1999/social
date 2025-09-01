import { SkeletonAvatar } from '../../atoms/ui/SkeletonAvatar';
import { SkeletonText } from '../../atoms/ui/SkeletonText';
import { SkeletonIcon } from '../../atoms/ui/SkeletonIcon';

export function PostCardSkeleton() {
  return (
    <article className="h-full">
      <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col animate-pulse">
        {/* Card Header Skeleton */}
        <header className="bg-gradient-to-r from-indigo-50 to-purple-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
          {/* Title skeleton */}
          <SkeletonText size="lg" width="3/4" className="mb-2" />
          <SkeletonText size="md" width="1/2" className="mb-2" />

          <aside className="flex justify-between items-center sm:justify-between space-y-2 sm:space-y-0">
            {/* Avatar skeleton */}
            <div className="flex items-center space-x-2">
              <SkeletonAvatar size="sm" />
              <SkeletonText size="sm" width="custom" customWidth="w-20" />
            </div>
            {/* Date skeleton */}
            <div className="flex items-center">
              <SkeletonIcon size="xs" className="mr-1" />
              <SkeletonText size="sm" width="custom" customWidth="w-16" />
            </div>
          </aside>
        </header>

        {/* Card Body Skeleton */}
        <section className="p-4 sm:p-6 flex-grow flex flex-col">
          {/* Content skeleton */}
          <div className="mb-4 sm:mb-6 flex-grow">
            <SkeletonText size="md" lines={3} spacing="tight" />
          </div>

          {/* Card Footer Skeleton */}
          <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
            <aside className="flex items-center space-x-4">
              {/* Comments count skeleton */}
              <SkeletonText
                size="md"
                width="custom"
                customWidth="w-20"
                className="rounded-full"
              />
            </aside>

            {/* Read more skeleton */}
            <div className="flex items-center">
              <SkeletonText
                size="sm"
                width="custom"
                customWidth="w-16"
                className="mr-1"
              />
              <SkeletonIcon size="xs" />
            </div>
          </footer>
        </section>
      </article>
    </article>
  );
}
