
export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  avatar?: string;
  createdAt: string;
}

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
   user?: {
    id: number;
    name: string;
    avatar?: string;
  };
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

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthResponse {
  user: User;
  success: boolean;
}

export interface RefreshTokenResponse {
  success: boolean;
  message: string;
}