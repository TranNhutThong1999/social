'use client';

import { CommentForm } from '@/modules/comments/components/CommentForm';
import { CommentList } from '@/modules/comments/components/CommentList';

interface CommentsSectionProps {
	postId: string | number;
}

export function CommentsSection({ postId }: CommentsSectionProps) {
	return (
		<div className="border-t border-gray-200 p-4 sm:p-6 lg:p-8">
			<h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800">
				Comments
			</h3>
			<CommentForm postId={postId.toString()} />
			<CommentList postId={postId.toString()} />
		</div>
	);
}
