import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// const PROTECTED_ROUTES = ['/post'];
const AUTH_ROUTES = ['/login', '/register'];
const AUTH_TOKEN_COOKIE = 'auth-token';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  
  const authToken = request.cookies.get(AUTH_TOKEN_COOKIE)?.value;

  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  
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
