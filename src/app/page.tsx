'use client';

import { PostList } from '@/modules/posts/components/PostList';
import { usePosts } from '@/modules/posts/hooks/usePosts';
import { useQueryParams } from '@/src/hooks/useQueryParams';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';
import { SearchAndFilter } from '../components/molecules/SearchAndFilter';
import { Pagination } from '../components/molecules/Pagination';

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
							<svg
								className="w-6 h-6 sm:w-8 sm:h-8 text-red-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
								/>
							</svg>
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

			<>
				<PostList posts={data?.posts || []} isLoading={isLoading} />

				{data && data.totalPages > 1 && (
					<nav className="mt-6 sm:mt-8">
						<Pagination
							currentPage={data.page}
							totalPages={data.totalPages}
							onPageChange={handlePageChange}
						/>
					</nav>
				)}
			</>
		</article>
	);
}
