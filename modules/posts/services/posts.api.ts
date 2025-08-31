import axios from 'axios';
import { apiClient } from '@/modules/api/axios';
import { Post, CreatePostData, UpdatePostData, PostsFilter, PostsResponse } from '@/src/types/types';

export const postsApi = {
  // Get posts with filters
  async getPosts(filters: PostsFilter = {}): Promise<PostsResponse> {
    try {
      const params = new URLSearchParams();
      
      if (filters.search) params.append('search', filters.search);
      if (filters.sortBy) params.append('sortBy', filters.sortBy);
      if (filters.sortOrder) params.append('sortOrder', filters.sortOrder);
      if (filters.page) params.append('page', filters.page.toString());
      if (filters.limit) params.append('limit', filters.limit.toString());

      const response = await apiClient.get(`/posts?${params.toString()}`);
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
      const response = await apiClient.get(`/posts/${id}`);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch post');
      }
      throw new Error('Failed to fetch post');
    }
  },

  // Create post
  async createPost(data: CreatePostData): Promise<Post> {
    try {
      const response = await apiClient.post('/posts', data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to create post');
      }
      throw new Error('Failed to create post');
    }
  },

  // Update post
  async updatePost(id: string, data: UpdatePostData): Promise<Post> {
    try {
      const response = await apiClient.put(`/posts/${id}`, data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to update post');
      }
      throw new Error('Failed to update post');
    }
  },

  // Delete post
  async deletePost(id: string): Promise<void> {
    try {
      await apiClient.delete(`/posts/${id}`);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to delete post');
      }
      throw new Error('Failed to delete post');
    }
  },
};
