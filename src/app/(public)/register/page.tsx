'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/modules/auth/services/auth.api';
import { useAuthStore } from '@/modules/shared/store/auth';
import { RegisterCredentials } from '@/modules/auth/types';
import { Header } from '@/src/components/organisms/Header';
import { LoadingSpinner } from '@/src/components/atoms/LoadingSpinner';
import toast from 'react-hot-toast';

export default function RegisterPage() {
	const router = useRouter();
	const { login } = useAuthStore();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<RegisterCredentials>();

	const password = watch('password');

	const registerMutation = useMutation({
		mutationFn: authApi.register,
		onSuccess: (data) => {
			login(data.user);
			toast.success('Registration successful!');
			router.push('/');
		},
		onError: (error: any) => {
			toast.error(error.response?.data?.error || 'Registration failed');
		},
	});

	const onSubmit = async (data: RegisterCredentials) => {
		setIsLoading(true);
		try {
			await registerMutation.mutateAsync(data);
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
							Sign up
						</h2>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<div>
								<label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
									Full name
								</label>
								<input
									type="text"
									autoFocus
									{...register('name', {
										required: 'Name is required',
										minLength: {
											value: 2,
											message:
												'Name must contain at least 2 characters',
										},
									})}
									className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
									placeholder="Enter your full name"
								/>
								{errors.name && (
									<p className="text-red-600 text-sm mt-1">
										{errors.name.message}
									</p>
								)}
							</div>

							<div>
								<label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
									Email
								</label>
								<input
									type="email"
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Email is not valid',
										},
									})}
									className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
									placeholder="Enter your email address"
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
												'Password should have a minimum of 6 characters',
										},
									})}
									className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
									placeholder="Enter a password "
								/>
								{errors.password && (
									<p className="text-red-600 text-sm mt-1">
										{errors.password.message}
									</p>
								)}
							</div>

							<div>
								<label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
									Confirm password
								</label>
								<input
									type="password"
									{...register('confirmPassword', {
										required:
											'Please confirm your password',
										validate: (value) =>
											value === password ||
											'Password confirmation does not match',
									})}
									className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
									placeholder="Re-enter your password"
								/>
								{errors.confirmPassword && (
									<p className="text-red-600 text-sm mt-1">
										{errors.confirmPassword.message}
									</p>
								)}
							</div>

							<button
								type="submit"
								disabled={isLoading}
								className="cursor-pointer w-full bg-indigo-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-indigo-700 transition font-medium text-sm sm:text-base"
							>
								{isLoading ? (
									<div className="flex items-center justify-center space-x-2">
										<LoadingSpinner />
										<span>Processing...</span>
									</div>
								) : (
									'Sign up'
								)}
							</button>
						</form>
						<p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
							Do you already have an account?{' '}
							<Link
								href="/login"
								className="text-indigo-600 hover:underline"
							>
								Sign in
							</Link>
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
