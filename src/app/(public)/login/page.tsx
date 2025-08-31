'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/modules/auth/services/auth.api';
import { useAuthStore } from '@/modules/shared/store/auth';
import { LoginCredentials } from '@/modules/auth/types';
import { Header } from '@/src/components/organisms/Header';
import { Button } from '@/src/components/atoms';
import toast from 'react-hot-toast';
import { AuthResponse } from '@/modules/auth/types';

export default function LoginPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const { login } = useAuthStore();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginCredentials>();

	const loginMutation = useMutation({
		mutationFn: authApi.login,
		onSuccess: (data: AuthResponse) => {
			login(data.user);
			toast.success('Login was successful!');
			const redirectTo = searchParams.get('redirect');
			if (redirectTo) {
				router.push(redirectTo);
			} else {
				router.push('/');
			}
		},
		onError: (error: any) => {
			toast.error(error.response?.data?.error || 'Failed to log in');
		},
	});

	const onSubmit = async (data: LoginCredentials) => {
		setIsLoading(true);
		try {
			await loginMutation.mutateAsync(data);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
			<Header />

			<main className="container mx-auto px-4 py-6 sm:py-8">
				<div className="max-w-md mx-auto">
					<div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 fade-in">
						<h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
							Sign in
						</h2>
						<div className="space-y-4">
							<div>
								<label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
									Email
								</label>
								<input
									autoFocus
									type="email"
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Invalid email address',
										},
									})}
									className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
									placeholder="Enter your email"
								/>
								{errors.email && (
									<p className="text-red-600 text-sm mt-1">
										{errors.email.message}
									</p>
								)}
							</div>
							<div>
								<label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
									Password
								</label>
								<input
									type="password"
									{...register('password', {
										required: 'Password is required',
										minLength: {
											value: 6,
											message:
												'Password must be at least 6 characters',
										},
									})}
									className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
									placeholder="Enter your password"
								/>
								{errors.password && (
									<p className="text-red-600 text-sm mt-1">
										{errors.password.message}
									</p>
								)}
							</div>
							<Button
								onClick={handleSubmit(onSubmit)}
								type="button"
								isLoading={isLoading}
								loadingText="Signing in..."
								fullWidth
							>
								Sign in
							</Button>
						</div>
						<p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
							Don't have an account?{' '}
							<Link
								href="/register"
								className="text-indigo-600 hover:underline"
							>
								Sign up now
							</Link>
						</p>

						<div className="mt-6 p-3 sm:p-4 bg-indigo-50 rounded-lg">
							<h3 className="font-medium text-indigo-900 mb-2 text-sm sm:text-base">
								Demo Accounts
							</h3>
							<div className="text-xs sm:text-sm text-indigo-800 space-y-1">
								<p>
									Email: john@example.com | Password:
									password123
								</p>
								<p>
									Email: jane@example.com | Password:
									password123
								</p>
								{/* <p>
									Email: bob@example.com | Password:
									password123
								</p> */}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
