import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/src/constants/routes';
import { API_ENDPOINTS, ERROR_CODE } from '../constants/api';
import { authApi } from './auth.api';
import { tokenManager } from '../libs/token-manager';

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
    const {status} = error.response;
    const isRefreshTokenRequest = originalRequest.url?.includes(API_ENDPOINTS.AUTH.REFRESH_TOKEN);
    const isLoginRequest = originalRequest.url?.includes(API_ENDPOINTS.AUTH.LOGIN);
    const isRegisterRequest = originalRequest.url?.includes(API_ENDPOINTS.AUTH.REGISTER);
    
    if (status === ERROR_CODE.UNAUTHORIZED && !originalRequest._retry && !isRefreshTokenRequest && !isLoginRequest && !isRegisterRequest) {
      originalRequest._retry = true;
      try {
        await tokenManager.refreshTokenCSR();
        return apiClient(originalRequest); 
      } catch (refreshError) {

        if (typeof window !== 'undefined') {
          redirect(ROUTES.LOGIN);
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
