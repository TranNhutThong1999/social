"use client";

import { CreatePostData, PostsFilter } from '@/src/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postsApi } from '../services/posts.api';



export const usePosts = (params: PostsFilter) => {
  
  return useQuery({
    queryKey: ['posts', params],
    queryFn: () => postsApi.getPosts(params),
  });
};

export const usePost = (id: string, enabled: boolean = true) => {

  return useQuery({
    queryKey: ['post', id],
    queryFn: () => postsApi.getPost(id),
    enabled: !!id && enabled,
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

