'use client';

interface SearchResultsProps {
	message: string;
	count: number;
	onClear: () => void;
}

export function SearchResults({ message, count, onClear }: SearchResultsProps) {
	if (count === 0) return null;

	return (
		<div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<i className="fas fa-search text-indigo-600 mr-2"></i>
					<span className="text-indigo-800 font-medium">
						{message}
					</span>
				</div>
				<button
					onClick={onClear}
					className="text-indigo-600 hover:text-indigo-800 text-sm cursor-pointer"
				>
					<i className="fas fa-times mr-1"></i>Xóa bộ lọc
				</button>
			</div>
		</div>
	);
}
