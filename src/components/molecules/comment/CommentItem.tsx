import React from 'react';
import { Comment } from '@/src/modules/comments/types';
import { AvatarGradient } from '../../atoms';
import { formatDate } from '@/src/utils';

interface CommentItemProps {
  comment: Comment;
}

export const CommentItem = React.memo(function CommentItem({
  comment,
}: CommentItemProps) {
  const authorName = comment.user?.name || 'Unknown';

  return (
    <article
      key={comment.id}
      className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 slide-in"
    >
      <header className="flex items-center mb-2 sm:mb-3">
        <AvatarGradient id={comment.id} authorName={authorName} />
        <time className="text-gray-500 text-xs sm:text-sm ml-2">
          {formatDate(comment.createdAt)}
        </time>
      </header>
      <p className="text-gray-700 ml-11 text-sm sm:text-base leading-relaxed">
        {comment.body}
      </p>
    </article>
  );
});
