import { Comment } from '@/modules/comments/types';

interface CommentItemProps {
	comment: Comment;
}

export function CommentItem({ comment }: CommentItemProps) {
	return (
		<div className="bg-gray-50 rounded-lg p-4">
			<div className="flex items-start space-x-3">
				<div className="flex-shrink-0">
					<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
						{comment.user.name.charAt(0).toUpperCase()}
					</div>
				</div>

				<div className="flex-1 min-w-0">
					<div className="flex items-center space-x-2">
						<p className="text-sm font-medium text-gray-900">
							{comment.user.name}
						</p>
						<span className="text-sm text-gray-500">
							{new Date(comment.createdAt).toLocaleDateString()}
						</span>
					</div>

					<p className="mt-1 text-sm text-gray-700">{comment.body}</p>
				</div>
			</div>
		</div>
	);
}
