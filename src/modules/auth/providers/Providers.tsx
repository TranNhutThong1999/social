'use client';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useAuthStore } from '@/src/stores/auth';
import { authApi } from '../services/auth.api';

interface ProvidersProps {
  children: React.ReactNode;
  token?: string;
}

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

    enabled: !!token,
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
            staleTime: 5 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            gcTime: 10 * 60 * 1000,
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
