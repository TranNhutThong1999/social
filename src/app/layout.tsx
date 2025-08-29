import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import { Providers } from '@/modules/shared/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Personal Blog - Modern Blog Application',
	description:
		'Modern blog application built with Next.js, React and TypeScript',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const token = (await cookies()).get('auth-token')?.value;

	return (
		<html lang="en">
			<head>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
					rel="stylesheet"
				/>
			</head>
			<body className={inter.className}>
				<Providers token={token}>{children}</Providers>
				<Toaster
					position="top-right"
					toastOptions={{
						duration: 4000,
						style: {
							background: '#363636',
							color: '#fff',
						},
					}}
				/>
			</body>
		</html>
	);
}
