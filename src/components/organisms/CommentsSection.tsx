'use client';

import { CommentForm } from '@/src/modules/comments/components/CommentForm';
import { CommentList } from '@/src/modules/comments/components/CommentList';
import { useAuthStore } from '@/src/stores/auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CommentsSectionProps {
  postId: string | number;
}

export function CommentsSection({ postId }: CommentsSectionProps) {
  const { isAuthenticated } = useAuthStore();
  const pathname = usePathname();

  return (
    <section className="border-t border-gray-200 p-3 sm:p-4 md:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-800">
        Comments
      </h2>

      {isAuthenticated ? (
        <CommentForm postId={postId.toString()} />
      ) : (
        <aside className="mb-6 sm:mb-8">
          <aside className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 md:p-6">
            <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <aside className="flex-1">
                <h3 className="text-blue-800 font-medium mb-1 text-sm sm:text-base">
                  Sign in to comment
                </h3>
                <p className="text-blue-600 text-xs sm:text-sm">
                  You need to sign in to add comments to this post.
                </p>
              </aside>
              <Link
                href={`/login?redirect=${encodeURIComponent(pathname)}`}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 sm:px-4 py-2 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-xs sm:text-sm whitespace-nowrap text-center"
              >
                Sign in
              </Link>
            </section>
          </aside>
        </aside>
      )}

      <CommentList postId={postId.toString()} />
    </section>
  );
}
