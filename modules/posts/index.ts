// Export posts API service
export { postsApi } from '../../src/api/posts.api';

// Export posts hooks
export { usePosts, usePost, useCreatePost, useUpdatePost, useDeletePost } from '../../src/app/(protected)/posts/[id]/hooks/usePosts';

// Export types
export type { 
  Post, 
  CreatePostData, 
  UpdatePostData, 
  PostsFilter, 
  PostsResponse 
} from '../../src/types/types';
