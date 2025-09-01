export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
  },
  POSTS: {
    LIST: '/post',
    DETAIL: (id: string) => `/post/${id}`,
    COMMENTS: (id: string) => `/post/${id}/comments`,
  },
} as const;

export const API_CONFIG = {
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;
