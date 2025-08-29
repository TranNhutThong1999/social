'use client';

import { PostsFilter } from '@/modules/posts/types';
import { useState } from 'react';

interface SearchAndFilterProps {
	onFiltersChange: (filters: Partial<PostsFilter>) => void;
	onSort: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
	currentSort: string;
	currentOrder: 'asc' | 'desc';
}

export function SearchAndFilter({
	onFiltersChange,
	onSort,
	currentSort,
	currentOrder,
}: SearchAndFilterProps) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSortChange = (sortBy: string) => {
		onSort(sortBy, currentOrder);
	};

	const handleFilter = () => {
		onFiltersChange({
			keyword: searchTerm,
			page: 1,
		});
	};

	return (
		<div className="bg-white rounded-xl shadow-lg p-6 mb-8">
			<div className="flex flex-col md:flex-row gap-4 items-center">
				<div className="flex-1">
					<div className="relative">
						<input
							type="text"
							placeholder="Search posts..."
							value={searchTerm}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									handleFilter();
								}
							}}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus-visible:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
						/>
						<i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="relative">
						<select
							value={currentSort}
							onChange={(e) => handleSortChange(e.target.value)}
							className="appearance-none bg-white px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-400 cursor-pointer min-w-[140px]"
						>
							<option value="createdAt">📅 Date posted</option>
							<option value="comments">💬 Comments count</option>
							<option value="title">📝 Title</option>
						</select>
						<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
					</div>
					{/* <button
						onClick={handleFilter}
						className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
					>
						<i className="fas fa-filter mr-2"></i>Filter
					</button> */}
				</div>
			</div>
		</div>
	);
}
