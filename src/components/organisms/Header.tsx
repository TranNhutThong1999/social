'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuthStore } from '@/src/stores/auth';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { usePathname } from 'next/navigation';

export function Header() {
	const { user, isAuthenticated } = useAuthStore();
	const { logout } = useAuth();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	return (
		<header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
			<nav className="container mx-auto px-4 py-4 lg:max-w-7xl ">
				<section className="flex justify-between items-center">
					<Link
						href="/"
						className="flex items-center space-x-2 sm:space-x-3 group"
					>
						<figure className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
							<svg
								className="w-4 h-4 sm:w-6 sm:h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
								/>
							</svg>
						</figure>
						<figcaption>
							<h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
								StoryHub
							</h1>
							<p className="text-xs text-gray-500 -mt-1 hidden sm:block">
								Share Your Stories
							</p>
						</figcaption>
					</Link>

					{/* Desktop Menu */}
					<nav className="hidden md:flex items-center space-x-4">
						{isAuthenticated ? (
							<>
								<aside className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
									<figure className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
										<figcaption className="text-white text-sm font-medium">
											{user?.name
												?.charAt(0)
												.toUpperCase()}
										</figcaption>
									</figure>
									<span className="text-gray-700 font-medium">
										{user?.name}
									</span>
								</aside>
								<button
									onClick={logout}
									className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2.5 rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
								>
									Sign Out
								</button>
							</>
						) : (
							<>
								<Link
									href={`/login?redirect=${encodeURIComponent(
										pathname
									)}`}
									className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
								>
									Sign In
								</Link>
								<Link
									href={`/register?redirect=${encodeURIComponent(
										pathname
									)}`}
									className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
								>
									Get Started
								</Link>
							</>
						)}
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
						aria-label="Toggle mobile menu"
					>
						<svg
							className="w-6 h-6 text-gray-700"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMobileMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</section>

				{isMobileMenuOpen && (
					<aside className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
						<section className="px-4 py-4">
							{isAuthenticated ? (
								<nav className="flex flex-col space-y-3">
									<aside className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-xl">
										<figure className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
											<figcaption className="text-white text-sm font-medium">
												{user?.name
													?.charAt(0)
													.toUpperCase()}
											</figcaption>
										</figure>
										<aside>
											<p className="text-gray-700 font-medium">
												{user?.name}
											</p>
											<p className="text-xs text-gray-500">
												Signed in
											</p>
										</aside>
									</aside>
									<button
										onClick={() => {
											logout();
											setIsMobileMenuOpen(false);
										}}
										className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 font-medium"
									>
										Sign Out
									</button>
								</nav>
							) : (
								<nav className="flex flex-col space-y-3">
									<Link
										href={`/login?redirect=${encodeURIComponent(
											pathname
										)}`}
										onClick={() =>
											setIsMobileMenuOpen(false)
										}
										className="w-full text-center text-gray-700 hover:text-indigo-600 font-medium py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
									>
										Sign In
									</Link>
									<Link
										href={`/register?redirect=${encodeURIComponent(
											pathname
										)}`}
										onClick={() =>
											setIsMobileMenuOpen(false)
										}
										className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-medium text-center"
									>
										Get Started
									</Link>
								</nav>
							)}
						</section>
					</aside>
				)}
			</nav>
		</header>
	);
}
