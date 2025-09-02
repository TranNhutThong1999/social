// Export posts API service
export { postsApi } from '@/src/api';

// Export posts hooks
export { usePosts, usePost, useCreatePost } from './hooks/usePosts';

// Export components
// PostList and PostCard have been moved to src/components/organisms and src/components/molecules respectively
// Export types
export type { 
  Post, 
  CreatePostData, 
  PostsFilter, 
  PostsResponse 
} from '@/src/types/types';
