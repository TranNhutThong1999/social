'use client';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useAuthStore } from '@/src/stores/auth';
import { authApi } from '@/src/api';

interface ProvidersProps {
  children: React.ReactNode;
}

function useAuthCheck() {
  const { setAuthenticated, updateUser } = useAuthStore();

  const {
    data: user,
    isSuccess,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: authApi.getCurrentUser,
  });

  useEffect(() => {
    if (isSuccess && !!user) {
      updateUser(user);
      setAuthenticated(true);
    } else if (isError || !isLoading) {
      setAuthenticated(false);
      console.log('User not authenticated');
    }
  }, [isSuccess, isError, user, isLoading]);
}

function AuthProvider({
  children,
}: {
  children: React.ReactNode;
  token?: string;
}) {
  useAuthCheck();
  return <>{children}</>;
}

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            gcTime: 10 * 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
