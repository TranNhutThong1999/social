"use client";

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { commentsApi } from '../services/comments.api';
import { Comment, CreateCommentData } from '../types';

export function useComments(postId: string) {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => commentsApi.getComments(postId),
    enabled: !!postId,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCommentData) => commentsApi.createComment(data),
    onSuccess: (newComment, variables) => {
      // Invalidate and refetch comments for the specific post
      queryClient.invalidateQueries({ queryKey: ['comments', variables.postId] });
      
      // Optimistically add the new comment to the cache
      queryClient.setQueryData(['comments', variables.postId], (oldData: Comment[] | undefined) => {
        if (!oldData) return [newComment];
        return [newComment, ...oldData];
      });
    },
  });
}

export function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }: { postId: string; commentId: string }) =>
      commentsApi.deleteComment(postId, commentId),
    onSuccess: (_, variables) => {
      // Invalidate and refetch comments for the specific post
      queryClient.invalidateQueries({ queryKey: ['comments', variables.postId] });
      
      // Optimistically remove the comment from the cache
      queryClient.setQueryData(['comments', variables.postId], (oldData: Comment[] | undefined) => {
        if (!oldData) return [];
        return oldData.filter(comment => comment.id !== variables.commentId);
      });
    },
  });
}

export function useUpdateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId, body }: { postId: string; commentId: string; body: string }) =>
      commentsApi.updateComment(postId, commentId, body),
    onSuccess: (updatedComment, variables) => {
      // Invalidate and refetch comments for the specific post
      queryClient.invalidateQueries({ queryKey: ['comments', variables.postId] });
      
      // Optimistically update the comment in the cache
      queryClient.setQueryData(['comments', variables.postId], (oldData: Comment[] | undefined) => {
        if (!oldData) return [updatedComment];
        return oldData.map(comment => 
          comment.id === variables.commentId ? updatedComment : comment
        );
      });
    },
  });
}
