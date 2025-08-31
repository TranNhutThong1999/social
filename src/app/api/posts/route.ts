import { comments } from '@/src/mocks/comments';
import { posts } from '@/src/mocks/posts';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const search = searchParams.get('search') || '';
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '6');

    // const commentsCount: Record<number, any[]> = comments.reduce((acc, comment) => {
    //   const postId = comment.postId;
      
    //   if (!acc[postId]) {
    //     acc[postId] = [];
    //   }
    //   acc[postId].push(comment);
      
    //   return acc;
    // }, {} as Record<number, any[]>);
    let filteredPosts = [...posts]
    
    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(
        post =>
          post.title.toLowerCase().includes(searchLower) ||
          post.body.toLowerCase().includes(searchLower) ||
          post.author?.name.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    filteredPosts.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortBy) {
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'comments':
          aValue = a.commentsCount || 0;
          bValue = b.commentsCount || 0;
          break;
        case 'createdAt':
        default:
          aValue = new Date(a.createdAt).getTime();
          bValue = new Date(b.createdAt).getTime();
          break;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    // Apply pagination
    const total = filteredPosts.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return NextResponse.json({
      posts: paginatedPosts,
      total,
      page,
      totalPages,
    });
  } catch (error) {
    console.error('Get posts error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
