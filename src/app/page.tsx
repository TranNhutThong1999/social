'use client';

import { SearchAndFilter } from '@/src/components/molecules/common';
import { PostList } from '@/src/components/organisms/PostList';
import { useQueryParams } from '@/src/hooks/useQueryParams';
import { usePosts } from '@/src/modules/posts/hooks/usePosts';

export default function HomePage() {
  const { getParams, setParams } = useQueryParams();
  const { page, limit, sortBy, sortOrder, search } = getParams();
  const { data, isLoading, error } = usePosts({
    search,
    page,
    limit,
    sortBy,
    sortOrder,
  });

  const handleSearch = (search: any): void => {
    setParams({ ...search, page: 1 });
  };

  const handlePageChange = (page: number): void => {
    setParams({ page });
  };

  return (
    <article className="max-w-7xl mx-auto">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
          Discover Amazing Stories
        </h1>
        <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
          Explore stories from our community of writers and readers
        </p>
      </header>

      <SearchAndFilter
        onChange={handleSearch}
        value={{ search, sortBy, sortOrder }}
      />

      <PostList
        posts={data?.posts || []}
        isLoading={isLoading}
        currentPage={data?.page}
        totalPages={data?.totalPages}
        onPageChange={handlePageChange}
      />
    </article>
  );
}
