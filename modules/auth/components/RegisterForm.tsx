'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';
import { Button } from '@/src/components/atoms/Button';
import { Input } from '@/src/components/atoms/Input';

export const RegisterForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		username: '',
		password: '',
		confirmPassword: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const { register } = useAuth();
	const router = useRouter();
	const pathname = usePathname();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError(null);

		if (formData.password !== formData.confirmPassword) {
			setError('Passwords do not match');
			setIsLoading(false);
			return;
		}

		const { confirmPassword, ...registerData } = formData;
		const result = await register(registerData as any);

		if (result.success) {
			router.push('/posts');
		} else {
			setError(result.error || 'Registration failed');
		}

		setIsLoading(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Create your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<a
							href={`/login?redirect=${encodeURIComponent(
								pathname
							)}`}
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							sign in to your existing account
						</a>
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					{error && (
						<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
							{error}
						</div>
					)}
					<div className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Full name
							</label>
							<Input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								required
								value={formData.name}
								onChange={handleChange}
								placeholder="Enter your full name"
								className="mt-1"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email address
							</label>
							<Input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								value={formData.email}
								onChange={handleChange}
								placeholder="Enter your email"
								className="mt-1"
							/>
						</div>
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700"
							>
								Username
							</label>
							<Input
								id="username"
								name="username"
								type="text"
								autoComplete="username"
								required
								value={formData.username}
								onChange={handleChange}
								placeholder="Enter your username"
								className="mt-1"
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<Input
								id="password"
								name="password"
								type="password"
								autoComplete="new-password"
								required
								value={formData.password}
								onChange={handleChange}
								placeholder="Enter your password"
								className="mt-1"
							/>
						</div>
						<div>
							<label
								htmlFor="confirmPassword"
								className="block text-sm font-medium text-gray-700"
							>
								Confirm password
							</label>
							<Input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								autoComplete="new-password"
								required
								value={formData.confirmPassword}
								onChange={handleChange}
								placeholder="Confirm your password"
								className="mt-1"
							/>
						</div>
					</div>

					<div>
						<Button
							type="submit"
							disabled={isLoading}
							className="w-full cursor-pointer"
						>
							{isLoading
								? 'Creating account...'
								: 'Create account'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
