import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { users } from '@/src/mocks/users';

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET || 'your-secret-key';

export interface AuthUser {
  id: number;
  email: string;
  name: string;
  username: string;
  avatar?: string;
}

export function verifyAuthToken(request: NextRequest): { user: AuthUser | null; error?: string; code?: string } {
  try {
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return { user: null, error: 'No token provided', code: 'NO_TOKEN' };
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
    const user = users.find(u => u.id === decoded.userId);
    
    if (!user) {
      return { user: null, error: 'User not found', code: 'USER_NOT_FOUND' };
    }

    return { 
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        avatar: user.avatar,
      }
    };
  } catch (jwtError) {
    if (jwtError instanceof jwt.TokenExpiredError) {
      return { user: null, error: 'Token expired', code: 'TOKEN_EXPIRED' };
    } else if (jwtError instanceof jwt.JsonWebTokenError) {
      return { user: null, error: 'Invalid token', code: 'INVALID_TOKEN' };
    }
    return { user: null, error: 'Token verification failed', code: 'TOKEN_VERIFICATION_FAILED' };
  }
}

export function requireAuth(request: NextRequest): { user: AuthUser; response?: NextResponse } {
  const authResult = verifyAuthToken(request);
  
  if (!authResult.user) {
    return {
      user: null as any,
      response: NextResponse.json(
        { 
          error: authResult.error || 'Authentication required',
          code: authResult.code || 'AUTH_REQUIRED'
        },
        { status: 401 }
      )
    };
  }

  return { user: authResult.user };
}
