import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { API_ENDPOINTS } from '../constants/api';
import { tokenManager } from '../libs/token-manager';
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';

export async function fetchWithAuth(
  input: RequestInfo | URL,
  init?: RequestInit
) {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();
  const hasRefreshToken = /(^|;\s*)refresh-token=/.test(cookieString);
  console.log('NEXT_PUBLIC_API_URL', NEXT_PUBLIC_API_URL);
  const url = `${NEXT_PUBLIC_API_URL}${input}`;

  const refreshUrl = `${NEXT_PUBLIC_API_URL}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
      Cookie: cookieString,
    },
    cache: 'no-store',
  });

  if (response.status === 401) {
    if (hasRefreshToken) {
      try {
        const newCookies = await tokenManager.refreshTokenSSR(
          refreshUrl,
          cookieString
        );

        if (newCookies) {
          return await fetch(url, {
            ...init,
            headers: {
              ...init?.headers,
              Cookie: newCookies,
            },
            cache: 'no-store',
          });
        }
      } catch (error) {
        console.error('SSR refresh failed:', error);
      }
    }
    
    redirect('/login');
  }
  return response;
}
