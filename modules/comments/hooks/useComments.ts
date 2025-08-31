"use client";

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { commentsApi } from '../services/comments.api';
import { Comment, CreateCommentData } from '../types';

export function useComments(postId: string) {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => commentsApi.getComments(postId),
    enabled: !!postId,
  });
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCommentData) => commentsApi.createComment(data),
    onSuccess: (newComment, variables) => {
      queryClient.invalidateQueries({ queryKey: ['comments', variables.postId] });
      
      queryClient.setQueryData(['comments', variables.postId], (oldData: Comment[] | undefined) => {
        if (!oldData) return [newComment];
        return [newComment, ...oldData];
      });
    },
  });
}

