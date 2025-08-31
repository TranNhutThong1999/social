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
		const maxVisiblePages = window.innerWidth < 640 ? 3 : 5; // Show fewer pages on mobile
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
		<div className="flex flex-col items-center space-y-4">
			{/* Page Info */}
			<div className="text-sm text-gray-600">
				Page {currentPage} of {totalPages}
			</div>

			{/* Pagination Controls */}
			<div className="flex items-center space-x-1 sm:space-x-2">
				{/* Previous Button */}
				{currentPage > 1 && (
					<button
						onClick={() => onPageChange(currentPage - 1)}
						className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-indigo-300 transition-all duration-200 font-medium shadow-sm hover:shadow-md text-sm sm:text-base"
					>
						<svg
							className="w-3 h-3 sm:w-4 sm:h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						<span className="hidden sm:inline">Previous</span>
					</button>
				)}

				{/* Page Numbers */}
				<div className="flex items-center space-x-1">
					{getPageNumbers().map((page) => (
						<button
							key={page}
							onClick={() => onPageChange(page)}
							className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl font-medium transition-all duration-200 text-sm sm:text-base ${
								page === currentPage
									? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
									: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-indigo-300 shadow-sm hover:shadow-md'
							}`}
						>
							{page}
						</button>
					))}
				</div>

				{/* Next Button */}
				{currentPage < totalPages && (
					<button
						onClick={() => onPageChange(currentPage + 1)}
						className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-indigo-300 transition-all duration-200 font-medium shadow-sm hover:shadow-md text-sm sm:text-base"
					>
						<span className="hidden sm:inline">Next</span>
						<svg
							className="w-3 h-3 sm:w-4 sm:h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				)}
			</div>

			{/* Quick Navigation */}
			{totalPages > 5 && (
				<div className="flex items-center space-x-2 text-sm">
					<button
						onClick={() => onPageChange(1)}
						disabled={currentPage === 1}
						className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all duration-200 text-xs sm:text-sm ${
							currentPage === 1
								? 'text-gray-400 cursor-not-allowed'
								: 'text-indigo-600 hover:bg-indigo-50'
						}`}
					>
						First
					</button>
					<span className="text-gray-400">•</span>
					<button
						onClick={() => onPageChange(totalPages)}
						disabled={currentPage === totalPages}
						className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all duration-200 text-xs sm:text-sm ${
							currentPage === totalPages
								? 'text-gray-400 cursor-not-allowed'
								: 'text-indigo-600 hover:bg-indigo-50'
						}`}
					>
						Last
					</button>
				</div>
			)}
		</div>
	);
}
