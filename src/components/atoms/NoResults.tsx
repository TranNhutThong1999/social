'use client';

export function NoResults() {
	return (
		<section className="col-span-full text-center py-12">
			<figure className="fas fa-search text-gray-400 text-6xl mb-4"></figure>
			<h2 className="text-xl font-medium text-gray-600 mb-2">
				No posts found
			</h2>
			<p className="text-gray-500">
				Try searching with different keywords
			</p>
		</section>
	);
}
