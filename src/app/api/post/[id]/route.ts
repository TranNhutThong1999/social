import { NextRequest, NextResponse } from 'next/server';
import { posts } from '@/src/mocks/posts';
import { requireAuth } from '@/src/mocks/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params; 
    const id = parseInt(resolvedParams?.id);
      
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid post ID' },
        { status: 400 }
      );
    }

    const post = posts.find(p => p.id === id);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const authResult = requireAuth(request);
    if (authResult.response) {
      return authResult.response;
    }

    const user = authResult.user;

    const responseData = {
      ...post,
      isAuthenticated: true,
      currentUser: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
      // Add any authenticated-only data here
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Get post error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
