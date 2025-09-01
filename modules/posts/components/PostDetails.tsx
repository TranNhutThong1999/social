import { CommentsSection } from '@/modules/comments/components/CommentsSection';
import { PostDetailContent } from '@/modules/posts/components/PostDetailContent';
import { Post } from '../../../src/types/types';

interface IProps {
	post?: Post;
}

export function PostDetails({ post }: IProps) {
	if (!post) {
		return (
			<section className="text-center py-8 text-gray-500">
				Post not found.
			</section>
		);
	}

	return (
		<main className="container mx-auto">
			<article className="lg:max-w-6xl mx-auto">
				<section className="fade-in">
					<article className="bg-white rounded-xl shadow-lg overflow-hidden">
						<PostDetailContent post={post} />
						<CommentsSection postId={post.id} />
					</article>
				</section>
			</article>
		</main>
	);
}
