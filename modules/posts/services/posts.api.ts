import { apiClient } from '@/modules/api/axios';
import { CreatePostData, Post, PostsFilter, PostsResponse } from '@/src/types/types';
import { API_ENDPOINTS } from '@/src/constants/api';
import axios from 'axios';

export const postsApi = {
  async getPosts(filters: PostsFilter = {}): Promise<PostsResponse> {
    try {
      const params = new URLSearchParams();
      
      if (filters.search) params.append('search', filters.search);
      if (filters.sortBy) params.append('sortBy', filters.sortBy);
      if (filters.sortOrder) params.append('sortOrder', filters.sortOrder);
      if (filters.page) params.append('page', filters.page.toString());
      if (filters.limit) params.append('limit', filters.limit.toString());

      const response = await apiClient.get(`${API_ENDPOINTS.POSTS.LIST}?${params.toString()}`);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch posts');
      }
      throw new Error('Failed to fetch posts');
    }
  },

  // Get single post
  async getPost(id: string): Promise<Post> {
    try {
      const response = await apiClient.get(API_ENDPOINTS.POSTS.DETAIL(id));
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch post');
      }
      throw new Error('Failed to fetch post');
    }
  },

  async createPost(data: CreatePostData): Promise<Post> {
    try {
      const response = await apiClient.post(API_ENDPOINTS.POSTS.LIST, data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to create post');
      }
      throw new Error('Failed to create post');
    }
  },

};
