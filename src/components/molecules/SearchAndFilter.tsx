'use client';

import { PostsFilter } from '@/src/types/types';
import { useState, useEffect } from 'react';

interface SearchAndFilterProps {
	onFiltersChange: (filters: Partial<PostsFilter>) => void;
	onSort: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
	currentSort: string;
	currentOrder: 'asc' | 'desc';
	initialSearch?: string;
}

export function SearchAndFilter({
	onFiltersChange,
	onSort,
	currentSort,
	currentOrder,
	initialSearch = '',
}: SearchAndFilterProps) {
	const [searchTerm, setSearchTerm] = useState(initialSearch);

	// Sync searchTerm with URL params when component mounts or initialSearch changes
	useEffect(() => {
		setSearchTerm(initialSearch);
	}, [initialSearch]);

	const handleSortChange = (sortBy: string) => {
		onSort(sortBy, currentOrder);
	};

	const handleOrderChange = (sortOrder: 'asc' | 'desc') => {
		onSort(currentSort, sortOrder);
	};

	const handleFilter = () => {
		onFiltersChange({
			search: searchTerm,
			page: 1,
		});
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleFilter();
		}
	};

	return (
		<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-6 sm:mb-8">
			<div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:gap-4 lg:items-center">
				{/* Search Input */}
				<div className="flex-1 w-full">
					<div className="relative group">
						<div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
							<svg
								className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-200"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
						<input
							type="text"
							placeholder="Search for stories, authors, or topics..."
							value={searchTerm}
							onKeyPress={handleKeyPress}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-500 text-sm sm:text-base"
						/>
						{searchTerm && (
							<button
								onClick={() => setSearchTerm('')}
								className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
							>
								<svg
									className="w-4 h-4 sm:w-5 sm:h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						)}
					</div>
				</div>

				{/* Sort Dropdowns and Search Button */}
				<div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
					{/* Sort Dropdowns */}
					<div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
						<div className="relative group">
							<select
								value={currentSort}
								onChange={(e) =>
									handleSortChange(e.target.value)
								}
								className="w-full sm:w-auto appearance-none bg-white px-3 sm:px-4 py-3 sm:py-3.5 pr-10 sm:pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 cursor-pointer min-w-[160px] sm:min-w-[180px] text-gray-700 font-medium text-sm sm:text-base"
							>
								<option value="createdAt">
									📅 Latest Stories
								</option>
								<option value="comments">
									💬 Most Discussed
								</option>
								<option value="title">📝 Alphabetical</option>
							</select>
							<div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4 pointer-events-none">
								<svg
									className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-200"
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

						<div className="relative group">
							<select
								value={currentOrder}
								onChange={(e) =>
									handleOrderChange(
										e.target.value as 'asc' | 'desc'
									)
								}
								className="w-full sm:w-auto appearance-none bg-white px-3 sm:px-4 py-3 sm:py-3.5 pr-10 sm:pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 cursor-pointer min-w-[120px] text-gray-700 font-medium text-sm sm:text-base"
							>
								<option value="desc">⬇️ Descending</option>
								<option value="asc">⬆️ Ascending</option>
							</select>
							<div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4 pointer-events-none">
								<svg
									className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-200"
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
					</div>

					{/* Search Button */}
					<button
						onClick={handleFilter}
						className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 sm:py-3.5 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium flex items-center justify-center space-x-2 text-sm sm:text-base"
					>
						<svg
							className="w-4 h-4 sm:w-5 sm:h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<span>Search</span>
					</button>
				</div>
			</div>
		</div>
	);
}
