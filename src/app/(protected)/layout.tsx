'use client';

import { Header } from '@/src/components';

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
			<Header />
			<main className="container mx-auto px-4 py-5 sm:py-12 max-w-6xl">
				{children}
			</main>
		</div>
	);
}
