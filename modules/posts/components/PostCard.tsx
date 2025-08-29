'use client';

import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Post } from '../types';

interface PostCardProps {
	post: Post;
}

export function PostCard({ post }: PostCardProps) {
	const authorName = post.author?.name || 'Unknown';
	const commentsCount = post._count?.comments || 0;

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
		return date.toLocaleDateString('en-US');
	};

	return (
		<div>
			<article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow  fade-in">
				<div className="p-6">
					<h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
						{post.title}
					</h3>
					<p className="text-gray-600 mb-4 line-clamp-3">
						{post.body}
					</p>
					<div className="flex justify-between items-center text-sm text-gray-500">
						<div className="flex items-center">
							<div className="w-6 h-6 rounded-full overflow-hidden mr-2">
								<svg
									className="w-full h-full"
									viewBox="0 0 100 100"
								>
									<defs>
										<linearGradient
											id={`postGrad${post.id}`}
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
										fill={`url(#postGrad${post.id})`}
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
							<span>{authorName}</span>
						</div>
						<span>
							<i className="fas fa-calendar mr-1"></i>
							{formatDate(post.createdAt)}
						</span>
					</div>
					<div className="flex justify-between items-center mt-4">
						<span className="text-sm text-gray-500">
							<i className="fas fa-comments mr-1"></i>
							{commentsCount} comments
						</span>
						<Link href={`/posts/${post.id}`}>
							<span className="text-indigo-600 hover:text-indigo-800 font-medium">
								Read more{' '}
								<i className="fas fa-arrow-right ml-1"></i>
							</span>
						</Link>
					</div>
				</div>
			</article>
		</div>
	);
}
