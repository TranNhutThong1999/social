import { Comment } from '@/modules/comments/types';
import { CommentListSkeleton } from '..';
import { CommentItem } from './CommentItem';

interface CommentListViewProps {
  comments: Comment[];
  isLoading?: boolean;
}

export function CommentListView({ comments, isLoading }: CommentListViewProps) {
  if (isLoading) {
    return <CommentListSkeleton />;
  }

  if (!comments || comments.length === 0) {
    return (
      <section className="text-center py-6 sm:py-8">
        <p className="text-gray-500 text-sm sm:text-base">
          No comments yet. Be the first to comment!
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-3 sm:space-y-4">
      {comments.map(comment => {
        return <CommentItem key={comment.id} comment={comment} />;
      })}
    </section>
  );
}
