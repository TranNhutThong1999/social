import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { users } from '@/modules/shared/data/users';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export interface AuthUser {
  id: number;
  email: string;
  name: string;
  username: string;
  avatar?: string;
}

export function verifyAuthToken(request: NextRequest): { user: AuthUser | null; error?: string } {
  try {
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return { user: null, error: 'No token provided' };
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
    const user = users.find(u => u.id === decoded.userId);
    
    if (!user) {
      return { user: null, error: 'User not found' };
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
    return { user: null, error: 'Invalid token' };
  }
}

export function requireAuth(request: NextRequest): { user: AuthUser; response?: NextResponse } {
  const authResult = verifyAuthToken(request);
  
  if (!authResult.user) {
    return {
      user: null as any,
      response: NextResponse.json(
        { error: authResult.error || 'Authentication required' },
        { status: 401 }
      )
    };
  }

  return { user: authResult.user };
}
