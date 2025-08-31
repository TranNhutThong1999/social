import { NextRequest, NextResponse } from 'next/server';
import { posts } from '@/src/mocks/posts';
import { verifyAuthToken } from '@/src/mocks/auth';

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

    // Optionally verify authentication for additional features
    const authResult = verifyAuthToken(request);
    const isAuthenticated = !!authResult.user;

    // You can add authenticated-only features here
    // For example, mark if the current user has liked the post
    const responseData = {
      ...post,
      isAuthenticated,
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
