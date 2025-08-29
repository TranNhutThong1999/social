'use client';

import { LoadingSpinner } from '@/modules/shared/components/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import { commentsApi } from '../services/comments.api';

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
		queryFn: () => commentsApi.getComments(postId),
	});

	const getAvatarColor = (name: string, isDark = false) => {
		const colors = [
			{ light: '#3B82F6', dark: '#1E40AF' }, // Blue
			{ light: '#10B981', dark: '#047857' }, // Green
			{ light: '#F59E0B', dark: '#D97706' }, // Yellow
			{ light: '#EF4444', dark: '#DC2626' }, // Red
			{ light: '#8B5CF6', dark: '#7C3AED' }, // Purple
			{ light: '#06B6D4', dark: '#0891B2' }, // Cyan
			{ light: '#F97316', dark: '#EA580C' }, // Orange
			{ light: '#EC4899', dark: '#DB2777' }, // Pink
		];

		let hash = 0;
		for (let i = 0; i < name.length; i++) {
			hash = name.charCodeAt(i) + ((hash << 5) - hash);
		}

		const colorIndex = Math.abs(hash) % colors.length;
		return isDark ? colors[colorIndex].dark : colors[colorIndex].light;
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('vi-VN');
	};

	if (isLoading) {
		return (
			<div className="flex justify-center py-8">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-center py-8">
				<p className="text-red-600">Unable to load comments</p>
			</div>
		);
	}

	if (!comments || comments.length === 0) {
		return (
			<div className="text-center py-8">
				<p className="text-gray-500">
					No comments yet. Be the first to comment!
				</p>
			</div>
		);
	}

	return (
		<div className="space-y-4">
			{comments.map((comment) => {
				const authorName = comment.user?.name || 'Unknown';
				return (
					<div
						key={comment.id}
						className="bg-gray-50 rounded-lg p-4 mb-4 slide-in"
					>
						<div className="flex items-center mb-2">
							<div className="w-8 h-8 rounded-full overflow-hidden mr-3">
								<svg
									className="w-full h-full"
									viewBox="0 0 100 100"
								>
									<defs>
										<linearGradient
											id={`grad${comment.id}`}
											x1="0%"
											y1="0%"
											x2="100%"
											y2="100%"
										>
											<stop
												offset="0%"
												style={{
													stopColor:
														getAvatarColor(
															authorName
														),
													stopOpacity: 1,
												}}
											/>
											<stop
												offset="100%"
												style={{
													stopColor: getAvatarColor(
														authorName,
														true
													),
													stopOpacity: 1,
												}}
											/>
										</linearGradient>
									</defs>
									<circle
										cx="50"
										cy="50"
										r="50"
										fill={`url(#grad${comment.id})`}
									/>
									<circle
										cx="50"
										cy="35"
										r="15"
										fill="white"
										opacity="0.9"
									/>
									<path
										d="M25 75 Q25 60 50 60 Q75 60 75 75 Z"
										fill="white"
										opacity="0.9"
									/>
								</svg>
							</div>
							<div>
								<span className="font-medium text-gray-800">
									{authorName}
								</span>
								<span className="text-gray-500 text-sm ml-2">
									{formatDate(comment.createdAt)}
								</span>
							</div>
						</div>
						<p className="text-gray-700 ml-11">{comment.body}</p>
					</div>
				);
			})}
		</div>
	);
}
