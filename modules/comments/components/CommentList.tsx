'use client';

import { CommentListView } from '@/src/components';
import { useQuery } from '@tanstack/react-query';
import { commentsApi } from '../services/comments.api';

interface CommentListProps {
  postId: string;
}

export function CommentList({ postId }: CommentListProps) {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['comments', postId],
    enabled: !!postId,
    queryFn: () => commentsApi.getComments(postId),
  });


  return <CommentListView isLoading={isLoading} comments={comments || []} postId={postId}  />;
}
