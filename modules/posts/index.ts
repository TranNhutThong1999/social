// Export posts API service
export { postsApi } from './services/posts.api';

// Export posts hooks
export { usePosts, usePost, useCreatePost, useUpdatePost, useDeletePost } from './hooks/usePosts';

// Export types
export type { 
  Post, 
  CreatePostData, 
  UpdatePostData, 
  PostsFilter, 
  PostsResponse 
} from '@/src/types/types';
