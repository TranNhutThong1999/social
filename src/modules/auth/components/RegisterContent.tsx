'use client';

import {
  Button,
  Input,
  InputPassword,
  LoadingSpinner,
} from '@/src/components/atoms';
import { useAuthStore } from '@/src/stores/auth';
import {
  validateEmail,
  validatePassword,
  validateRequired,
} from '@/src/utils/validation';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthResponse, RegisterCredentials } from '@/src/types/types';
import { authApi } from '@/src/api';

type OnSubmitHandler = (data: RegisterCredentials) => Promise<void>;

export default function RegisterPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterCredentials>();

  const password: string = watch('password');

  const registerMutation = useMutation({
    mutationFn: authApi.register,
    onSuccess: (data: AuthResponse) => {
      login(data.user);
      toast.success('Registration successful!');
      const redirectTo = searchParams.get('redirect');
      const targetPath = redirectTo || '/';

      router.refresh();
      setTimeout(() => {
        router.replace(targetPath);
      }, 200);
    },
    onError: (error: any) => {
      toast.error(error.response?.data.error || 'Registration failed');
    },
  });

  const onSubmit: OnSubmitHandler = async (data: RegisterCredentials) => {
    setIsLoading(true);
    try {
      await registerMutation.mutateAsync(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <article className="max-w-md mx-auto">
        <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 fade-in">
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
            Sign up
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              isRequired={true}
              label="Full name"
              autoFocus
              {...register('name', {
                required: 'Name is required',
                validate: value =>
                  validateRequired(value) || 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must contain at least 2 characters',
                },
              })}
              placeholder="Enter your full name"
              error={errors.name?.message}
            />

            <Input
              label="Email"
              type="email"
              isRequired={true}
              {...register('email', {
                required: 'Email is required',
                validate: value => validateEmail(value) || 'Email is not valid',
              })}
              placeholder="Enter your email address"
              error={errors.email?.message}
            />

            <InputPassword
              label="Password"
              isRequired={true}
              {...register('password', {
                required: 'Password is required',
                validate: value => {
                  if (!value) return 'Password is required';
                  const validation = validatePassword(value);
                  if (!validation.isValid) {
                    return validation.errors[0]; // Return first error
                  }
                  return true;
                },
              })}
              placeholder="Enter a password"
              error={errors.password?.message}
            />

            <InputPassword
              isRequired={true}
              label="Confirm password"
              {...register('confirmPassword', {
                required: 'Confirm password is required',
                validate: (value: string | undefined) => {
                  if (!value) return 'Confirm password is required';
                  if (!validateRequired(value))
                    return 'Confirm password is required';
                  return (
                    value === password || 'Password confirmation does not match'
                  );
                },
              })}
              placeholder="Re-enter your password"
              error={errors.confirmPassword?.message}
            />

            <Button type="submit" disabled={isLoading} fullWidth>
              {isLoading ? (
                <aside className="flex items-center justify-center space-x-2">
                  <LoadingSpinner />
                  <p>Processing...</p>
                </aside>
              ) : (
                'Sign up'
              )}
            </Button>
          </form>
          <p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
            Do you already have an account?{' '}
            <Link
              href={`/login?redirect=${encodeURIComponent(pathname)}`}
              className="text-indigo-600 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </section>
      </article>
    </main>
  );
}
