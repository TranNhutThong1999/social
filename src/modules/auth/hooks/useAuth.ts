"use client";

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/stores/auth';
import { authApi } from '@/src/api';
import { LoginCredentials, RegisterCredentials } from '@/src/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ROUTES } from '@/src/constants/routes';

export const useAuth = () => {
  const { user, isAuthenticated, login: loginStore, logout: logoutStore } = useAuthStore();
  const router = useRouter();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      loginStore(data.user);
      queryClient.invalidateQueries({ queryKey: ['auth'] });
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });

  const registerMutation = useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      loginStore(data.user);
      queryClient.invalidateQueries({ queryKey: ['auth'] });
    },
    onError: (error) => {
      console.error('Registration error:', error);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      logoutStore();
      queryClient.invalidateQueries({ queryKey: ['auth'] });
      router.push(ROUTES.HOME);
    },
    onError: (error) => {
      console.error('Logout error:', error);
      logoutStore();
      router.push(ROUTES.HOME);
    },
  });

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      const result = await loginMutation.mutateAsync(credentials);
      return { success: true, data: result };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Login failed' 
      };
    }
  }, [loginMutation]);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    try {
      const result = await registerMutation.mutateAsync(credentials);
      return { success: true, data: result };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Registration failed' 
      };
    }
  }, [registerMutation]);

  const logout = useCallback(async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, [logoutMutation]);

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    isLoginLoading: loginMutation.isPending,
    isRegisterLoading: registerMutation.isPending,
    isLogoutLoading: logoutMutation.isPending,
    loginError: loginMutation.error,
    registerError: registerMutation.error,
    logoutError: logoutMutation.error,
  };
};
