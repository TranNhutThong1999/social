'use client';

import { formatDate } from '@/src/utils';
import { Comment } from '@/modules/comments/types';
import { CommentListSkeleton } from '..';
import { AvatarGradient } from '../../atoms';

interface CommentListViewProps {
  comments: Comment[];
  postId: string;
  isLoading?: boolean;
}

export function CommentListView({
  comments,
  postId,
  isLoading,
}: CommentListViewProps) {
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
        const authorName = comment.user?.name || 'Unknown';
        return (
          <article
            key={comment.id}
            className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 slide-in"
          >
            <header className="flex items-center mb-2 sm:mb-3">
              <AvatarGradient postId={postId} authorName={authorName} />
              <time className="text-gray-500 text-xs sm:text-sm ml-2">
                {formatDate(comment.createdAt)}
              </time>
            </header>
            <p className="text-gray-700 ml-11 text-sm sm:text-base leading-relaxed">
              {comment.body}
            </p>
          </article>
        );
      })}
    </section>
  );
}
