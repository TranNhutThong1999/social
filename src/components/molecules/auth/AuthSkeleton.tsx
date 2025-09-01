import { SkeletonText, SkeletonButton } from '../../atoms';

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
            <SkeletonText
              size="lg"
              width="custom"
              customWidth="w-32"
              className="mx-auto"
            />
          </div>

          {/* Form skeleton */}
          <div className="space-y-4">
            {/* Input fields skeleton */}
            {type === 'register' && (
              <div className="space-y-2">
                <SkeletonText size="md" width="custom" customWidth="w-20" />
                <SkeletonButton size="lg" width="full" />
              </div>
            )}

            {/* Email field */}
            <div className="space-y-2">
              <SkeletonText size="md" width="custom" customWidth="w-12" />
              <SkeletonButton size="lg" width="full" />
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <SkeletonText size="md" width="custom" customWidth="w-16" />
              <SkeletonButton size="lg" width="full" />
            </div>

            {/* Confirm password field (register only) */}
            {type === 'register' && (
              <div className="space-y-2">
                <SkeletonText size="md" width="custom" customWidth="w-28" />
                <SkeletonButton size="lg" width="full" />
              </div>
            )}

            {/* Button skeleton */}
            <SkeletonButton size="lg" width="full" />
          </div>

          {/* Link text skeleton */}
          <div className="text-center mt-4">
            <SkeletonText
              size="md"
              width="custom"
              customWidth="w-48"
              className="mx-auto"
            />
          </div>

          {/* Demo accounts section (login only) */}
          {type === 'login' && (
            <aside className="mt-6 p-3 sm:p-4 bg-gray-100 rounded-lg">
              <SkeletonText
                size="md"
                width="custom"
                customWidth="w-24"
                className="mb-2"
              />
              <div className="space-y-1">
                <SkeletonText size="sm" />
                <SkeletonText size="sm" />
              </div>
            </aside>
          )}
        </section>
      </article>
    </main>
  );
}
