'use client';

import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Post } from '../../../../../types/types';

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
		return formatDistanceToNow(date, { addSuffix: true });
	};

	return (
		<Link href={`/posts/${post.id}`}>
			<div className="group">
				<article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1">
					{/* Card Header with Gradient */}
					<div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
						<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
							{post.title}
						</h3>
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 text-sm">
							<div className="flex items-center space-x-2">
								<div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
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
														stopColor:
															getAvatarColor(
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
								<span className="font-medium text-gray-700 text-sm">
									{authorName}
								</span>
							</div>
							<span className="text-gray-500 flex items-center text-sm">
								<svg
									className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								{formatDate(post.createdAt)}
							</span>
						</div>
					</div>

					{/* Card Body */}
					<div className="p-4 sm:p-6">
						<p className="text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">
							{post.body}
						</p>

						{/* Card Footer */}
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 pt-3 sm:pt-4 border-t border-gray-100">
							<div className="flex items-center space-x-4">
								<span className="flex items-center text-xs sm:text-sm text-gray-500 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
									<svg
										className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
										/>
									</svg>
									{commentsCount} comments
								</span>
							</div>

							<span className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-200 group-hover:translate-x-1 transform text-sm sm:text-base">
								Read more
								<svg
									className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-1.5 group-hover:translate-x-1 transition-transform duration-200"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</span>
						</div>
					</div>
				</article>
			</div>
		</Link>
	);
}
