import axios from 'axios';
import { apiClient } from '../../shared/lib/axios';
import { Comment, CreateCommentData } from '../types';

export const commentsApi = {
  // Get comments for a post
  async getComments(postId: string): Promise<Comment[]> {
    try {
      const response = await apiClient.get(`/posts/${postId}/comments`);
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
      const response = await apiClient.post(`/posts/${data.postId}/comments`, {
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

  // Delete a comment
  async deleteComment(postId: string, commentId: string): Promise<void> {
    try {
      await apiClient.delete(`/posts/${postId}/comments/${commentId}`);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to delete comment');
      }
      throw new Error('Failed to delete comment');
    }
  },

  // Update a comment
  async updateComment(postId: string, commentId: string, body: string): Promise<Comment> {
    try {
      const response = await apiClient.put(`/posts/${postId}/comments/${commentId}`, {
        body,
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to update comment');
      }
      throw new Error('Failed to update comment');
    }
  },
};
