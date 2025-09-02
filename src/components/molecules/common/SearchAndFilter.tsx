'use client';

import { PostsFilter } from '@/src/types/types';
import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { Button, Input } from '@/src/components/atoms';
import { SearchIcon, ClearIcon, DropdownIcon } from '@/src/components/icons';

// Types
interface SearchAndFilterProps {
  onChange: (filters: Partial<PostsFilter>) => void;
  value?: PostsFilter;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

type SortByOption = PostsFilter['sortBy'];
type SortOrderOption = PostsFilter['sortOrder'];

// Constants
const DEFAULT_FILTER: PostsFilter = {
  search: '',
  sortBy: 'createdAt',
  sortOrder: 'asc',
  page: 1,
  limit: 6,
};

const SORT_OPTIONS = [
  { value: 'createdAt', label: '📅 Latest Stories' },
  { value: 'comments', label: '💬 Most Discussed' },
] as const;

const ORDER_OPTIONS = [
  { value: 'desc', label: '⬇️ Descending' },
  { value: 'asc', label: '⬆️ Ascending' },
] as const;

const updateFilter = (
  prev: PostsFilter,
  updates: Partial<PostsFilter>
): PostsFilter => ({
  ...prev,
  ...updates,
});

// Component
export function SearchAndFilter({
  onChange,
  value = DEFAULT_FILTER,
  className = '',
  placeholder = 'Search for stories, authors, or topics...',
  disabled = false,
}: SearchAndFilterProps) {
  const [filter, setFilter] = useState<PostsFilter>(value);

  useEffect(() => {
    setFilter(value);
  }, [value]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(prev => updateFilter(prev, { search: e.target.value }));
  };

  const handleClearSearch = () => {
    setFilter(prev => updateFilter(prev, { search: '' }));
  };

  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev =>
      updateFilter(prev, { sortBy: e.target.value as SortByOption })
    );
  };

  const handleSortOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev =>
      updateFilter(prev, { sortOrder: e.target.value as SortOrderOption })
    );
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onChange(filter);
    }
  };

  const handleSearch = () => {
    onChange(filter);
  };

  // Common styles
  const selectStyles =
    'w-full sm:w-auto appearance-none bg-white px-3 sm:px-4 py-3 sm:py-3.5 pr-10 sm:pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 cursor-pointer text-gray-700 font-medium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <aside
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-6 sm:mb-8 ${className}`}
    >
      <section className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:gap-4 lg:items-center">
        {/* Search Input */}
        <fieldset className="flex-1 w-full">
          <Input
            type="text"
            autoFocus
            placeholder={placeholder}
            value={filter.search}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            disabled={disabled}
            leftIcon={<SearchIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
            rightIcon={
              filter.search ? (
                <div
                  onClick={handleClearSearch}
                  className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Clear search"
                >
                  <ClearIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              ) : undefined
            }
            fullWidth={true}
            className="bg-gray-50 focus:bg-white placeholder-gray-500"
          />
        </fieldset>

        <aside className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <aside className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <fieldset className="relative group">
              <label htmlFor="sort-by-select" className="sr-only">
                Sort by
              </label>
              <select
                id="sort-by-select"
                value={filter.sortBy}
                onChange={handleSortByChange}
                disabled={disabled}
                className={`${selectStyles} min-w-[160px] sm:min-w-[180px]`}
              >
                {SORT_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <figure className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4 pointer-events-none">
                <DropdownIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-200" />
              </figure>
            </fieldset>

            {/* Sort Order */}
            <fieldset className="relative group">
              <label htmlFor="sort-order-select" className="sr-only">
                Sort order
              </label>
              <select
                id="sort-order-select"
                value={filter.sortOrder}
                onChange={handleSortOrderChange}
                disabled={disabled}
                className={`${selectStyles} min-w-[120px]`}
              >
                {ORDER_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <figure className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4 pointer-events-none">
                <DropdownIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-200" />
              </figure>
            </fieldset>
          </aside>

          <Button
            onClick={handleSearch}
            variant="secondary"
            size="md"
            fullWidth={false}
            disabled={disabled}
            className="w-full sm:w-auto"
            leftIcon={<SearchIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
          >
            Search
          </Button>
        </aside>
      </section>
    </aside>
  );
}
