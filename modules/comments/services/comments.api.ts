import axios from 'axios';
import { apiClient } from '../../api/axios';
import { Comment, CreateCommentData } from '../types';
import { API_ENDPOINTS } from '@/src/constants/api';

export const commentsApi = {
  // Get comments for a post
  async getComments(postId: string): Promise<Comment[]> {
    try {
      const response = await apiClient.get(API_ENDPOINTS.POSTS.COMMENTS(postId));
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch comments');
      }
      throw new Error('Failed to fetch comments');
    }
  },

  // Create a new comment
  async createComment(data: CreateCommentData): Promise<Comment> {
    try {
      const response = await apiClient.post(API_ENDPOINTS.POSTS.COMMENTS(data.postId.toString()), {
        body: data.body,
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to create comment');
      }
      throw new Error('Failed to create comment');
    }
  },
}