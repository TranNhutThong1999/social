import { Comment } from '@/modules/comments/types';

interface CommentItemProps {
	comment: Comment;
}

export function CommentItem({ comment }: CommentItemProps) {
	return (
		<article className="bg-gray-50 rounded-lg p-4">
			<aside className="flex items-start space-x-3">
				<figure className="flex-shrink-0">
					<figcaption className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
						{comment.user.name.charAt(0).toUpperCase()}
					</figcaption>
				</figure>

				<section className="flex-1 min-w-0">
					<header className="flex items-center space-x-2">
						<p className="text-sm font-medium text-gray-900">
							{comment.user.name}
						</p>
						<time className="text-sm text-gray-500">
							{new Date(comment.createdAt).toLocaleDateString()}
						</time>
					</header>

					<p className="mt-1 text-sm text-gray-700">{comment.body}</p>
				</section>
			</aside>
		</article>
	);
}
