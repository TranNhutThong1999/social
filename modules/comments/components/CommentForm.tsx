'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateCommentData } from '../types';
import toast from 'react-hot-toast';
import { commentsApi } from '../services/comments.api';

interface CommentFormProps {
	postId: string;
	onCommentAdded?: () => void;
}

export function CommentForm({ postId, onCommentAdded }: CommentFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const queryClient = useQueryClient();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CreateCommentData>();

	const createCommentMutation = useMutation({
		mutationFn: (data: CreateCommentData) =>
			commentsApi.createComment(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['comments', postId] });
			queryClient.invalidateQueries({ queryKey: ['posts'] });
			reset({ body: '' });
			onCommentAdded?.();
			toast.success('Comment added!');
		},
		onError: (error: any) => {
			toast.error(error.message || 'Failed to add comment');
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

	return (
		<div className="mb-8">
			<div className="bg-gray-50 rounded-lg p-4">
				<textarea
					{...register('body', {
						required: 'Please enter a comment',
						minLength: {
							value: 1,
							message: 'Comment cannot be empty',
						},
						maxLength: {
							value: 1000,
							message: 'Comment must not exceed 1000 characters',
						},
					})}
					rows={3}
					className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
					placeholder="Write your comment..."
					disabled={isSubmitting}
				/>
				{errors.body && (
					<p className="text-red-600 text-sm mt-1">
						{errors.body.message}
					</p>
				)}
				<div className="flex justify-end mt-3">
					<button
						type="button"
						onClick={handleSubmit(onSubmit)}
						disabled={isSubmitting}
						className=" cursor-pointer  bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
					>
						{isSubmitting ? 'Submitting...' : 'Submit'}
					</button>
				</div>
			</div>
		</div>
	);
}
