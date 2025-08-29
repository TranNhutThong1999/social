'use client';

import Link from 'next/link';
import { useAuthStore } from '../store/auth';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export function Header() {
	const { user, isAuthenticated } = useAuthStore();
	const { logout } = useAuth();

	return (
		<header className="bg-white shadow-lg sticky top-0 z-50 ">
			<div className="container mx-auto px-4 py-4 lg:max-w-7xl">
				<div className="flex justify-between items-center">
					<Link
						href="/"
						className="text-2xl font-bold text-indigo-600 cursor-pointer"
					>
						<i className="fas fa-blog mr-2"></i>Personal Blog
					</Link>

					{isAuthenticated ? (
						<div className="flex items-center space-x-4">
							<span className="text-gray-700 mr-4">
								Hello, {user?.name}!
							</span>
							<button
								onClick={logout}
								className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
							>
								Log out
							</button>
						</div>
					) : (
						<div className="space-x-4">
							<Link
								href="/login"
								className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
							>
								Log in
							</Link>
							<Link
								href="/register"
								className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition"
							>
								Sign up
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
