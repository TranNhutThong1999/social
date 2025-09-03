import axios from 'axios';
import { apiClient } from './axios';
import { LoginCredentials, RegisterCredentials, User, AuthResponse, RefreshTokenResponse } from '@/src/types/types';
import { API_ENDPOINTS } from '@/src/constants/api';

export const authApi = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
      return response.data;
   
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER, credentials);
      return response.data;
   
  },

  async getCurrentUser() {
    try {
      const response = await apiClient.get(API_ENDPOINTS.AUTH.ME);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to get current user');
      }
      throw new Error('Failed to get current user');
    }
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    } catch (error: unknown) {
      console.log('Logout API failed, but proceeding with logout');
    } finally {
      // Always clear local state
    }
  },

  async refreshToken(): Promise<RefreshTokenResponse> {
    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Token refresh failed');
      }
      throw new Error('Token refresh failed');
    }
  },
};
