'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { commentsApi } from '../services/comments.api';
import { CreateCommentData } from '../types';
import { CommentFormView } from '@/src/components/molecules/comment/CommentFormView';

interface CommentFormProps {
  postId: string;
}

export function CommentForm({ postId }: CommentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCommentData>();

  const createCommentMutation = useMutation({
    mutationFn: (data: CreateCommentData) => commentsApi.createComment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      reset({ body: '' });
      toast.success('Comment added!');
    },
    onError: (error: any) => {
      if (error.message?.includes('Authentication required')) {
        toast.error('Please login to comment');
      } else {
        toast.error(error.message || 'Failed to add comment');
      }
    },
  });

  const onSubmit = async (data: CreateCommentData) => {
    setIsSubmitting(true);
    try {
      await createCommentMutation.mutateAsync({
        postId: Number(postId),
        body: data.body,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = handleSubmit(onSubmit);

  return (
    <CommentFormView
      onSubmit={handleFormSubmit}
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
    />
  );
}
