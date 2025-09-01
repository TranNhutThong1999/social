import { PostDetailSkeleton } from './PostDetailSkeleton';
import { CommentSectionSkeleton } from '../comment/CommentSectionSkeleton';

export function PostLoadingSkeleton() {
	return (
		<main className="container mx-auto">
			<article className="lg:max-w-6xl mx-auto">
				<section className="fade-in">
					<article className="bg-white rounded-xl shadow-lg overflow-hidden">
						<PostDetailSkeleton />
						<CommentSectionSkeleton />
					</article>
				</section>
			</article>
		</main>
	);
}
