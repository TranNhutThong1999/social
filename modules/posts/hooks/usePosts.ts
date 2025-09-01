"use client";

import { CreatePostData, PostsFilter, Post } from '@/src/types/types';
import { useMutation, useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { postsApi } from '../services/posts.api';

export const usePosts = (params: PostsFilter) => {
  
  return useQuery({
    queryKey: ['posts', params],
    queryFn: () => postsApi.getPosts(params),
  });
};

export const usePost = (
  id: string, 
  options?: Partial<UseQueryOptions<Post, Error, Post, ['post', string]>>
) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => postsApi.getPost(id),
    enabled: !!id && (options?.enabled ?? true),
    ...options,
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

