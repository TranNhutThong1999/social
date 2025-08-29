'use client';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	if (totalPages <= 1) return null;

	const getPageNumbers = () => {
		const pages = [];
		const maxVisiblePages = 5;
		let startPage = Math.max(
			1,
			currentPage - Math.floor(maxVisiblePages / 2)
		);
		let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

		if (endPage - startPage + 1 < maxVisiblePages) {
			startPage = Math.max(1, endPage - maxVisiblePages + 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}

		return pages;
	};

	return (
		<div className="flex justify-center items-center space-x-2">
			{currentPage > 1 && (
				<button
					onClick={() => onPageChange(currentPage - 1)}
					className="px-4 py-2 mx-1 bg-white text-gray-700 border border-gray-300 cursor-pointer rounded-lg hover:bg-gray-50 transition"
				>
					‹
				</button>
			)}

			{getPageNumbers().map((page) => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					className={`cursor-pointer px-4 py-2 mx-1 border border-gray-300 rounded-lg transition ${
						page === currentPage
							? 'bg-indigo-600 text-white'
							: 'bg-white text-gray-700 hover:bg-gray-50'
					}`}
				>
					{page}
				</button>
			))}

			{currentPage < totalPages && (
				<button
					onClick={() => onPageChange(currentPage + 1)}
					className="cursor-pointer px-4 py-2 mx-1 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
				>
					›
				</button>
			)}
		</div>
	);
}
