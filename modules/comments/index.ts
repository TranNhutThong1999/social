// Export comments API service
export { commentsApi } from './services/comments.api';

// Export comments hooks
export { useComments, useCreateComment, useDeleteComment, useUpdateComment } from './hooks/useComments';

// Export types
export type { Comment, CreateCommentData } from './types';
