'use client';

import { AvatarGradient } from '@/src/components/atoms/AvatarGradient';
import { Post } from '@/src/types/types';
import { formatDate } from '@/src/utils';
import { useRouter } from 'next/navigation';

interface PostDetailContentProps {
	post: Post;
}

const BackButton = ({ onClick }: { onClick: () => void }) => (
	<div
		onClick={onClick}
		className="cursor-pointer flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
		role="button"
		tabIndex={0}
		onKeyDown={(e) => e.key === 'Enter' && onClick()}
	>
		<svg
			className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M15 19l-7-7 7-7"
			/>
		</svg>
		<span className="text-sm font-medium">Quay lại</span>
	</div>
);

const PostHeader = ({ post }: { post: Post }) => {
	const authorName = post.author?.name || 'Unknown';

	return (
		<div className="flex justify-between items-center text-gray-600 mb-4 sm:mb-6 sm:space-y-0">
			<AvatarGradient postId={post.id} authorName={authorName} />

			<span className="text-sm sm:text-base">
				<i className="fas fa-calendar mr-2" aria-hidden="true"></i>
				{formatDate(post.createdAt)}
			</span>
		</div>
	);
};

export function PostDetailContent({ post }: PostDetailContentProps) {
	const router = useRouter();

	const handleBackClick = () => {
		router.back();
	};

	return (
		<div className="p-4 sm:p-6 lg:p-8">
			<div className="flex items-center justify-between mb-4 sm:mb-6">
				<BackButton onClick={handleBackClick} />
			</div>

			<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
				{post.title}
			</h1>

			<PostHeader post={post} />

			<div className="prose max-w-none text-gray-700 leading-relaxed text-sm sm:text-base">
				{post.body}
			</div>
		</div>
	);
}
