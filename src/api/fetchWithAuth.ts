import { cookies, headers } from 'next/headers';
import { API_ENDPOINTS } from '../constants/api';
import { tokenManager } from '../libs/token-manager';
import { redirect } from 'next/navigation';


export async function fetchWithAuth(
  input: RequestInfo | URL,
  init?: RequestInit
) {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();

  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const url = `${protocol}://${host}${input}`;

  const refreshUrl = `${protocol}://${host}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`;
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
      redirect('/login');
    }
  }
  return response;
}
