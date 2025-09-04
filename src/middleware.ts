import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { AUTH_ROUTES, COOKIE_NAMES } from './constants/routes';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const authToken = cookieStore.get(COOKIE_NAMES.AUTH_TOKEN)?.value;
  const refreshToken = cookieStore.get(COOKIE_NAMES.REFRESH_TOKEN)?.value;
  // const token = authToken || refreshToken;
  
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);
  
  const isAuthRoute = AUTH_ROUTES.includes(pathname as typeof AUTH_ROUTES[number]);
  
  // const isProtectedRoute = PROTECTED_ROUTES.some(route => 
  //   pathname.startsWith(route)
  // );

  if (pathname.startsWith('/api/')) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // if (isProtectedRoute && !token) {
  //   const loginUrl = new URL(ROUTES.LOGIN, request.url);
  //   loginUrl.searchParams.set('redirect', pathname);
  //   return NextResponse.redirect(loginUrl);
  // }
  
  if (authToken && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
