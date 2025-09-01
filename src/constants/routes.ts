export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  POST: '/post',
} as const;

export const AUTH_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER] as const;

export const COOKIE_NAMES = {
  AUTH_TOKEN: 'auth-token',
} as const;
