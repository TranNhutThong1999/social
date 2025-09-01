
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  author?: {
    id: number;
    name: string;
    username: string;
    avatar?: string;
  };
  commentsCount?:number
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  author?: {
    id: number;
    name: string;
    username: string;
    avatar?: string;
  };
}

export interface CreateCommentData {
  postId: number | string;
  body: string;
}

export interface CreatePostData {
  title: string;
  body: string;
}

export interface PostsFilter {
  search?: string;
  sortBy?: 'createdAt' | 'comments';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  page: number;
  totalPages: number;
}
