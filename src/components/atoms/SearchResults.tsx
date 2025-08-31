'use client';

interface SearchResultsProps {
	message: string;
	count: number;
	onClear: () => void;
}

export function SearchResults({ message, count, onClear }: SearchResultsProps) {
	if (count === 0) return null;

	return (
		<aside className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
			<section className="flex items-center justify-between">
				<aside className="flex items-center">
					<figure className="fas fa-search text-indigo-600 mr-2"></figure>
					<p className="text-indigo-800 font-medium">{message}</p>
				</aside>
				<button
					onClick={onClear}
					className="text-indigo-600 hover:text-indigo-800 text-sm cursor-pointer"
					type="button"
				>
					<figure className="fas fa-times mr-1"></figure>Xóa bộ lọc
				</button>
			</section>
		</aside>
	);
}
