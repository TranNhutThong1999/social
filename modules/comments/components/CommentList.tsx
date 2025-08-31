'use client';

import { LoadingSpinner } from '@/src/components/atoms/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import { commentsApi } from '../services/comments.api';
import { AvatarGradient } from '@/src/components';
import { formatDate } from '@/src/utils';

interface CommentListProps {
	postId: string;
}

export function CommentList({ postId }: CommentListProps) {
	const {
		data: comments,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['comments', postId],
		enabled: !!postId,
		queryFn: () => commentsApi.getComments(postId),
	});

	if (isLoading) {
		return (
			<section className="flex flex-col justify-center py-6 sm:py-8">
				<LoadingSpinner />
				<p className="text-xs sm:text-sm text-gray-500 font-medium mt-3 sm:mt-4 text-center">
					Loading amazing content...
				</p>
			</section>
		);
	}

	if (error) {
		return (
			<section className="text-center py-6 sm:py-8">
				<p className="text-red-600 text-sm sm:text-base">
					Unable to load comments
				</p>
			</section>
		);
	}

	if (!comments || comments.length === 0) {
		return (
			<section className="text-center py-6 sm:py-8">
				<p className="text-gray-500 text-sm sm:text-base">
					No comments yet. Be the first to comment!
				</p>
			</section>
		);
	}

	return (
		<section className="space-y-3 sm:space-y-4">
			{comments.map((comment) => {
				const authorName = comment.user?.name || 'Unknown';
				return (
					<article
						key={comment.id}
						className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 slide-in"
					>
						<header className="flex items-center mb-2 sm:mb-3">
							<AvatarGradient
								postId={postId}
								authorName={authorName}
							/>
							<time className="text-gray-500 text-xs sm:text-sm ml-2">
								{formatDate(comment.createdAt)}
							</time>
						</header>
						<p className="text-gray-700 ml-11 text-sm sm:text-base leading-relaxed">
							{comment.body}
						</p>
					</article>
				);
			})}
		</section>
	);
}
