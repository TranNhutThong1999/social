import axios from 'axios';
import { apiClient } from '../../api/axios';
import { LoginCredentials, RegisterCredentials, User, AuthResponse } from '../types';

export const authApi = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Login failed');
      }
      throw new Error('Login failed');
    }
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    try {
      const response = await apiClient.post('/auth/register', credentials);
      
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Registration failed');
      }
      throw new Error('Registration failed');
    }
  },

  async getCurrentUser() {
    try {
      
      const response = await apiClient.get('/auth/me');
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
      await apiClient.post('/auth/logout', {});
    } catch (error: unknown) {
      console.warn('Logout API failed, but proceeding with logout');
    } finally {
    }
  },
};
