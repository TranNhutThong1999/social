import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/src/constants/routes';
import { API_ENDPOINTS } from '../constants/api';
import { authApi } from './auth.api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10000, 
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    const isRefreshTokenRequest = originalRequest.url?.includes(API_ENDPOINTS.AUTH.REFRESH_TOKEN);
    
    if (error.response?.status === 401 && !originalRequest._retry && !isRefreshTokenRequest) {
      originalRequest._retry = true;
      try {
        await authApi.refreshToken();
        return apiClient(originalRequest); 
      } catch (refreshError) {
        redirect(ROUTES.LOGIN);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
export default apiClient;
