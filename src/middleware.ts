import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_ROUTES, COOKIE_NAMES, PROTECTED_ROUTES, ROUTES } from './constants/routes';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const authToken = cookieStore.get(COOKIE_NAMES.AUTH_TOKEN)?.value;
  const refreshToken = cookieStore.get(COOKIE_NAMES.REFRESH_TOKEN)?.value;
  const token = authToken || refreshToken;
  
  const isAuthRoute = AUTH_ROUTES.includes(pathname as typeof AUTH_ROUTES[number]);
  
  const isProtectedRoute = PROTECTED_ROUTES.some(route => 
    pathname.startsWith(route)
  );

  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // if (isProtectedRoute && !token) {
  //   const loginUrl = new URL(ROUTES.LOGIN, request.url);
  //   loginUrl.searchParams.set('redirect', pathname);
  //   return NextResponse.redirect(loginUrl);
  // }
  
  if (authToken && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  return NextResponse.next();
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
