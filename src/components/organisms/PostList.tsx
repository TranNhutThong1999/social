'use client';

import { PostListSkeleton } from '@/src/components/molecules/PostListSkeleton';
import { Pagination } from '@/src/components/molecules/Pagination';
import { PostCard } from '@/src/components/molecules/PostCard';
import { Post } from '../../types/types';

interface PostListProps {
  posts: Post[];
  isLoading?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  loadMore?: () => void;
}

export function PostList({
  posts,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
}: PostListProps) {
  if (isLoading && posts.length === 0) {
    return <PostListSkeleton count={6} />;
  }

  if (posts.length === 0) {
    return (
      <section className="text-center py-8 text-gray-500">
        No posts found.
      </section>
    );
  }

  return (
    <article className="space-y-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 auto-rows-fr">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      {totalPages && totalPages > 1 && currentPage && onPageChange && (
        <nav className="mt-6 sm:mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </nav>
      )}
    </article>
  );
}
