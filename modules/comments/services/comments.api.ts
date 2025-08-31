import axios from 'axios';
import { apiClient } from '../../api/axios';
import { Comment, CreateCommentData } from '../types';

export const commentsApi = {
  // Get comments for a post
  async getComments(postId: string): Promise<Comment[]> {
    try {
      const response = await apiClient.get(`/post/${postId}/comments`);
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
      const response = await apiClient.post(`/post/${data.postId}/comments`, {
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