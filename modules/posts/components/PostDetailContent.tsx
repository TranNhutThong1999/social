'use client';

import { AvatarGradient } from '@/src/components/atoms/AvatarGradient';
import { Post } from '@/src/types/types';
import { formatDate } from '@/src/utils';
import { useRouter } from 'next/navigation';

interface PostDetailContentProps {
	post: Post;
}

const BackButton = ({ onClick }: { onClick: () => void }) => (
	<button
		onClick={onClick}
		className="cursor-pointer flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
		type="button"
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
		<p className="text-sm font-medium">Quay lại</p>
	</button>
);

const PostHeader = ({ post }: { post: Post }) => {
	const authorName = post.author?.name || 'Unknown';

	return (
		<header className="flex justify-between items-center text-gray-600 mb-4 sm:mb-6 sm:space-y-0">
			<AvatarGradient postId={post.id} authorName={authorName} />

			<time className="text-sm sm:text-base">
				<figure
					className="fas fa-calendar mr-2"
					aria-hidden="true"
				></figure>
				{formatDate(post.createdAt)}
			</time>
		</header>
	);
};

export function PostDetailContent({ post }: PostDetailContentProps) {
	const router = useRouter();

	const handleBackClick = () => {
		router.back();
	};

	return (
		<article className="p-4 sm:p-6 lg:p-8">
			<nav className="flex items-center justify-between mb-4 sm:mb-6">
				<BackButton onClick={handleBackClick} />
			</nav>

			<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
				{post.title}
			</h1>

			<PostHeader post={post} />

			<section className="prose max-w-none text-gray-700 leading-relaxed text-sm sm:text-base">
				{post.body}
			</section>
		</article>
	);
}
