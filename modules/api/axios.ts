import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Create axios instance with base configuration
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
  withCredentials: true, // Enable sending cookies with requests
});

// // Request interceptor
// apiClient.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     // With cookie authentication, we don't need to manually add Authorization header
//     // The browser will automatically send the auth-token cookie
    
//     // Log request in development
//     if (process.env.NODE_ENV === 'development') {
//       console.log('🚀 Request:', config.method?.toUpperCase(), config.url, config.data);
//     }
    
//     return config;
//   },
//   (error) => {
//     console.error('❌ Request Error:', error);
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// apiClient.interceptors.response.use(
//   (response: AxiosResponse) => {
//     // Log response in development
//     if (process.env.NODE_ENV === 'development') {
//       console.log('✅ Response:', response.status, response.config.url, response.data);
//     }
    
//     return response;
//   },
//   (error) => {
//     // Handle different error scenarios
//     if (error.response) {
//       // Server responded with error status
//       const { status, data } = error.response;
      
//       switch (status) {
//         case 401:
//           // Unauthorized - redirect to login
//           if (typeof window !== 'undefined') {
//             window.location.href = '/login';
//           }
//           break;
//         case 403:
//           // Forbidden
//           console.error('Access forbidden');
//           break;
//         case 404:
//           // Not found
//           console.error('Resource not found');
//           break;
//         case 500:
//           // Server error
//           console.error('Server error');
//           break;
//         default:
//           console.error(`HTTP Error ${status}:`, data);
//       }
      
//       // Log error in development
//       if (process.env.NODE_ENV === 'development') {
//         console.error('❌ Response Error:', status, error.config?.url, data);
//       }
//     } else if (error.request) {
//       // Network error
//       console.error('❌ Network Error:', error.message);
//     } else {
//       // Other error
//       console.error('❌ Error:', error.message);
//     }
    
//     return Promise.reject(error);
//   }
// );

// // Helper function to get token
// export const getAuthToken = (): string | null => {
//   if (typeof window !== 'undefined') {
//     return localStorage.getItem('token');
//   }
//   return null;
// };

// // Helper function to set token
// export const setAuthToken = (token: string): void => {
//   if (typeof window !== 'undefined') {
//     localStorage.setItem('token', token);
//   }
// };

// // Helper function to remove token
// export const removeAuthToken = (): void => {
//   if (typeof window !== 'undefined') {
//     localStorage.removeItem('token');
//   }
// };

export default apiClient;
