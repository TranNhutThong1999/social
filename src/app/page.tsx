'use client';

import { PostList } from '@/src/components/organisms/PostList';
import { usePosts } from '@/modules/posts/hooks/usePosts';
import { useQueryParams } from '@/src/hooks/useQueryParams';
import { SearchAndFilter } from '../components/molecules/SearchAndFilter';
import { ExclamationIcon } from '../components/icons';

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

  if (error) {
    return (
      <article className="container mx-auto px-4 py-8 sm:py-16">
        <section className="max-w-md mx-auto text-center">
          <aside className="mb-6">
            <figure className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExclamationIcon className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
            </figure>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              We couldn't load the posts. Please try again later.
            </p>
          </aside>
          <button
            onClick={() => window.location.reload()}
            className="bg-indigo-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm sm:text-base"
          >
            Try Again
          </button>
        </section>
      </article>
    );
  }

  return (
    <article className="max-w-7xl mx-auto">
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
