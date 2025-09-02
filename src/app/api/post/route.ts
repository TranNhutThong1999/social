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



    let filteredPosts = [...posts]
    
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(
        post =>
          post.title.toLowerCase().includes(searchLower) ||
          post.body.toLowerCase().includes(searchLower)
      );
    }

    filteredPosts.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortBy) {
       
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

    return response;
  } catch (error) {
    console.error('Get posts error:', error);
    const errorResponse = NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
    

    return errorResponse;
  }
}
