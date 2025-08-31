'use client';

import { authApi } from '@/modules/auth/services/auth.api';
import { AuthResponse, LoginCredentials } from '@/modules/auth/types';
import { Button, Input, InputPassword } from '@/src/components/atoms';
import { useAuthStore } from '@/src/stores/auth';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function LoginPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const { login } = useAuthStore();
	const [isLoading, setIsLoading] = useState<boolean>(false);

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
		<main>
			<div className="max-w-md mx-auto">
				<div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 fade-in">
					<h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
						Sign in
					</h2>
					<div className="space-y-4">
						<Input
							autoFocus
							type="email"
							label="Email"
							placeholder="Enter your email"
							error={errors.email?.message}
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address',
								},
							})}
						/>
						<InputPassword
							label="Password"
							placeholder="Enter your password"
							error={errors.password?.message}
							{...register('password', {
								required: 'Password is required',
								minLength: {
									value: 6,
									message:
										'Password must be at least 6 characters',
								},
							})}
						/>
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
								Email: john@example.com | Password: password123
							</p>
							<p>
								Email: jane@example.com | Password: password123
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
	);
}
