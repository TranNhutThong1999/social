'use client';

import { authApi } from '@/modules/auth/services/auth.api';
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/auth';

interface ProvidersProps {
	children: React.ReactNode;
	token?: string;
}

// Custom hook for authentication check
function useAuthCheck(token?: string) {
	const { setAuthenticated, updateUser } = useAuthStore();

	const {
		data: user,
		isSuccess,
		isError,
		isLoading,
	} = useQuery({
		queryKey: ['auth', 'me'],
		queryFn: authApi.getCurrentUser,
		retry: false,
		staleTime: 10 * 60 * 1000, // 10 minutes instead of 5
		gcTime: 15 * 60 * 1000, // 15 minutes cache (replaces cacheTime)
		enabled: !!token, // Only run query if token exists
		refetchOnWindowFocus: false, // Don't refetch when window gains focus
		refetchOnMount: false, // Don't refetch on component mount if data exists
	});

	useEffect(() => {
		if (isSuccess && user) {
			updateUser(user);
			setAuthenticated(true);
		} else if (isError || (!token && !isLoading)) {
			setAuthenticated(false);
			console.log('User not authenticated');
		}
	}, [isSuccess, isError, user, token, isLoading]);
}

function AuthProvider({
	children,
	token,
}: {
	children: React.ReactNode;
	token?: string;
}) {
	useAuthCheck(token);
	return <>{children}</>;
}

export function Providers({ children, token }: ProvidersProps) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 60 * 1000, // 5 minutes
						retry: 1,
						refetchOnWindowFocus: false,
						refetchOnMount: false,
					},
					mutations: {
						retry: 1,
					},
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider token={token}>{children}</AuthProvider>
		</QueryClientProvider>
	);
}
