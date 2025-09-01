import { SkeletonAvatar, SkeletonText } from '../../atoms/ui';

export function CommentListSkeleton() {
  return (
    <section className="space-y-3 sm:space-y-4">
      {/* Generate 3 skeleton comment items */}
      {Array.from({ length: 3 }).map((_, index) => (
        <article
          key={index}
          className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4"
        >
          <header className="flex items-center mb-2 sm:mb-3">
            {/* Avatar skeleton */}
            <SkeletonAvatar size="sm" />
            {/* Timestamp skeleton */}
            <SkeletonText size="sm" width="1/3" className="ml-2" />
          </header>
          {/* Comment text skeleton */}
          <div className="ml-11">
            <SkeletonText
              size="md"
              lines={3}
              spacing="normal"
              width="custom"
              customWidth="w-full"
            />
          </div>
        </article>
      ))}
    </section>
  );
}
