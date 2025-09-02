import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { users } from '@/src/mocks/users';

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET || 'your-secret-key';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;
    const refreshToken = request.cookies.get('refresh-token')?.value;
    
    if (!token && !refreshToken) {
      return NextResponse.json(null);
    }

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      );
    }

    // Verify JWT token
    let decoded: { userId: number; email: string };
    try {
      decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
    } catch (jwtError) {
      // Token expired or invalid - clear the cookie
      const response = NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
      
      // Clear the expired token cookie
      response.cookies.set('auth-token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 0,
        path: '/',
      });
      
      response.cookies.set('refresh-token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 0, 
        path: '/',
      });
      return response;
    }
    
    // Find user by ID
    const user = users.find(u => u.id === decoded.userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Return user data
    return NextResponse.json(user);
  } catch (error) {
    console.error('Get current user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
