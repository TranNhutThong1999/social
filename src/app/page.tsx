'use client';

import { PostList } from '@/modules/posts/components/PostList';
import { usePosts } from '@/modules/posts/hooks/usePosts';
import { Header } from '@/modules/shared/components/Header';
import { LoadingSpinner } from '@/modules/shared/components/LoadingSpinner';
import { Pagination } from '@/modules/shared/components/Pagination';
import { SearchAndFilter } from '@/modules/shared/components/SearchAndFilter';
import { useQueryParams } from '@/modules/shared/hooks/useQueryParams';

export default function HomePage() {
	const { getParams, setParams } = useQueryParams();
	const {
		page = 1,
		limit = 6,
		sortBy = 'createdAt',
		sortOrder = 'desc',
		keyword = '',
	} = getParams();
	const { data, isLoading, error } = usePosts({
		keyword,
		page,
		limit,
		sortBy,
		sortOrder,
	});

	const handleSearch = (search: any) => {
		setParams({ ...search, page: 1 });
	};

	const handleSort = (sortBy: string, sortOrder: 'asc' | 'desc') => {
		setParams({ sortBy: sortBy, sortOrder, page: 1 });
	};

	const handlePageChange = (page: number) => {
		setParams({ page });
	};

	const handleClearSearch = () => {
		setParams({ keyword: '', page: 1 });
	};

	if (error) {
		return (
			<div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
				<Header />
				<div className="container mx-auto px-4 py-8">
					<div className="text-center">
						<h1 className="text-2xl font-bold text-red-600 mb-4">
							Error loading posts
						</h1>
						<p className="text-gray-600">Please try again later.</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
			<Header />

			<main className="container mx-auto px-4 py-8">
				<div className="fade-in lg:max-w-6xl mx-auto">
					<SearchAndFilter
						onFiltersChange={handleSearch}
						onSort={handleSort}
						currentSort={sortBy}
						currentOrder={sortOrder}
					/>

					{isLoading ? (
						<div className="flex justify-center py-12">
							<LoadingSpinner />
						</div>
					) : (
						<>
							<PostList
								posts={data?.posts || []}
								isLoading={isLoading}
							/>

							{data && data.totalPages > 1 && (
								<Pagination
									currentPage={data.page}
									totalPages={data.totalPages}
									onPageChange={handlePageChange}
								/>
							)}
						</>
					)}
				</div>
			</main>
		</div>
	);
}
