"use client";

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/stores/auth';
import { authApi } from '../services/auth.api';
import { LoginCredentials, RegisterCredentials } from '../types';

export const useAuth = () => {
  const { user, isAuthenticated, login: loginStore, logout: logoutStore } = useAuthStore();
  const router = useRouter();

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      const { user } = await authApi.login(credentials);
      loginStore(user);
      return { success: true };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Login failed' };
    }
  }, [loginStore]);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    try {
      const { user } = await authApi.register(credentials);
      loginStore(user);
      return { success: true };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Registration failed' };
    }
  }, [loginStore]);

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      logoutStore();
    }
  }, [logoutStore, router]);

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout,
  };
};
