'use client';

export function NoResults() {
	return (
		<div className="col-span-full text-center py-12">
			<i className="fas fa-search text-gray-400 text-6xl mb-4"></i>
			<h3 className="text-xl font-medium text-gray-600 mb-2">
				No posts found
			</h3>
			<p className="text-gray-500">
				Try searching with different keywords
			</p>
		</div>
	);
}
