import { comments } from '@/src/mocks/comments';
import { posts } from '@/src/mocks/posts';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
  try {
    console.log('Posts API called:', request.url);
    
    const { searchParams } = new URL(request.url);
    
    const search = searchParams.get('search') || '';
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '6');

    console.log('Search params:', { search, sortBy, sortOrder, page, limit });

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

    console.log(`Returning ${paginatedPosts.length} posts out of ${total} total`);

    const response = NextResponse.json({
      posts: paginatedPosts,
      total,
      page,
      totalPages,
    });

    // Add CORS headers to response
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
    response.headers.set('Access-Control-Allow-Credentials', 'true');

    return response;
  } catch (error) {
    console.error('Get posts error:', error);
    const errorResponse = NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
    
    // Add CORS headers to error response
    errorResponse.headers.set('Access-Control-Allow-Origin', '*');
    errorResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    errorResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
    errorResponse.headers.set('Access-Control-Allow-Credentials', 'true');
    
    return errorResponse;
  }
}
