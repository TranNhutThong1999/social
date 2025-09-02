import { NextRequest, NextResponse } from 'next/server';
import { comments } from '@/src/mocks/comments';
import { requireAuth } from '@/src/mocks/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Require authentication for accessing comments
    const authResult = requireAuth(request);
    if (authResult.response) {
      return authResult.response;
    }

    const resolvedParams = await params; 
    const postId = parseInt(resolvedParams.id);
    
    if (isNaN(postId)) {
      return NextResponse.json(
        { error: 'Invalid post ID' },
        { status: 400 }
      );
    }

    const postComments = comments.filter(c => c.postId === postId);
    
    return NextResponse.json(postComments);
  } catch (error) {
    console.error('Get comments error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authResult = requireAuth(request);
    if (authResult.response) {
      return authResult.response;
    }

    const user = authResult.user;
    const resolvedParams = await params; 
    const postId = parseInt(resolvedParams.id);
    const { body } = await request.json();

    if (!body || body.trim().length === 0) {
      return NextResponse.json(
        { error: 'Comment body is required' },
        { status: 400 }
      );
    }

    const newComment = {
      id: comments.length + 1,
      postId,
      authorId: user.id,
      body: body.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      },
      user: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      },
    };

    comments.push(newComment);

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error('Create comment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
