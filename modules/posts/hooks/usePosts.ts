"use client";

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postsApi } from '../services/posts.api';
import { PostsFilter, CreatePostData, UpdatePostData } from '../types';



export const usePosts = (params: PostsFilter) => {
  const FiveMinutes =  5 * 60 * 1000
  
  return useQuery({
    queryKey: ['posts', params],
    queryFn: () => postsApi.getPosts(params),
    staleTime: FiveMinutes
  });
};

export const usePost = (id: string, enabled: boolean = true) => {
  const FiveMinutes =  5 * 60 * 1000

  return useQuery({
    queryKey: ['post', id],
    queryFn: () => postsApi.getPost(id),
    enabled: !!id && enabled,
    staleTime: FiveMinutes
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePostData) => postsApi.createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdatePostData }) =>
      postsApi.updatePost(id, data),
    onSuccess: (updatedPost: any) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.setQueryData(['post', updatedPost.id], updatedPost);
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => postsApi.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
