'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/src/components/atoms/Input';
import { useDebounce } from '@/src/hooks/useDebounce';

interface PostFiltersProps {
	onSearchChange: (search: string) => void;
	onSortChange: (sort: string) => void;
}

export function PostFilters({
	onSearchChange,
	onSortChange,
}: PostFiltersProps) {
	const [searchTerm, setSearchTerm] = useState('');
	const [sortBy, setSortBy] = useState('newest');

	const debouncedSearch = useDebounce(searchTerm, 300);

	// Update parent when debounced search changes
	useEffect(() => {
		onSearchChange(debouncedSearch);
	}, [debouncedSearch, onSearchChange]);

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setSortBy(value);
		onSortChange(value);
	};

	return (
		<div className="bg-white shadow rounded-lg p-6">
			<div className="flex flex-col sm:flex-row gap-4">
				<div className="flex-1">
					<label
						htmlFor="search"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Search posts
					</label>
					<Input
						id="search"
						type="text"
						placeholder="Search by title or content..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				<div className="sm:w-48">
					<label
						htmlFor="sort"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Sort by
					</label>
					<select
						id="sort"
						value={sortBy}
						onChange={handleSortChange}
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					>
						<option value="newest">Newest first</option>
						<option value="oldest">Oldest first</option>
						<option value="popular">Most popular</option>
						<option value="title">Title A-Z</option>
					</select>
				</div>
			</div>
		</div>
	);
}
