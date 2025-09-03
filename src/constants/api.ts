const PREFIX_API = '/api';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${PREFIX_API}/auth/login`,
    REGISTER: `${PREFIX_API}/auth/register`,
    LOGOUT: `${PREFIX_API}/auth/logout`,
    ME: `${PREFIX_API}/auth/me`,
    REFRESH_TOKEN: `${PREFIX_API}/auth/refresh-token`,
  },
  POSTS: {
    LIST: `${PREFIX_API}/post`,
    DETAIL: (id: string) => `${PREFIX_API}/post/${id}`,
    COMMENTS: (id: string) => `${PREFIX_API}/post/${id}/comments`,
  },
} as const;

export const API_CONFIG = {
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

export const ERROR_CODE = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;