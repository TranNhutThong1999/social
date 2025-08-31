'use client';

import { Post } from '@/src/types/types';
import { useRouter } from 'next/navigation';

interface PostDetailContentProps {
	post: Post;
}

export function PostDetailContent({ post }: PostDetailContentProps) {
	const router = useRouter();
	const authorName = post.author?.name || 'Unknown';

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

	return (
		<div className="p-4 sm:p-6 lg:p-8">
			<div className="flex items-center justify-between mb-4 sm:mb-6">
				<button
					onClick={() => router.back()}
					className="cursor-pointer flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
				>
					<svg
						className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					<span className="text-sm font-medium">Quay lại</span>
				</button>
			</div>

			<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
				{post.title}
			</h1>
			<div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4 sm:mb-6 space-y-2 sm:space-y-0">
				<div className="flex items-center sm:mr-6">
					<div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden mr-2 sm:mr-3">
						<svg className="w-full h-full" viewBox="0 0 100 100">
							<defs>
								<linearGradient
									id={`detailGrad${post.id}`}
									x1="0%"
									y1="0%"
									x2="100%"
									y2="100%"
								>
									<stop
										offset="0%"
										style={{
											stopColor:
												getAvatarColor(authorName),
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
								fill={`url(#detailGrad${post.id})`}
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
					<span className="text-sm sm:text-base">{authorName}</span>
				</div>
				<span className="text-sm sm:text-base">
					<i className="fas fa-calendar mr-2"></i>
					{formatDate(post.createdAt)}
				</span>
			</div>
			<div className="prose max-w-none text-gray-700 leading-relaxed text-sm sm:text-base">
				{post.body}
			</div>
		</div>
	);
}
