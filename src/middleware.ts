import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_ROUTES, COOKIE_NAMES } from './constants/routes';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  
  const authToken = request.cookies.get(COOKIE_NAMES.AUTH_TOKEN)?.value;

  const isAuthRoute = AUTH_ROUTES.includes(pathname as typeof AUTH_ROUTES[number]);
  
  // if (isProtectedRoute && !authToken) {
  //   const loginUrl = new URL('/login', request.url);
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
