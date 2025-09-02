import { formatDate } from '@/src/utils';
import { AvatarGradient } from '../../atoms';

interface PostFooterProps {
  postId: string | number;
  authorName: string;
  createdAt: string;
  className?: string;
}

export function PostFooter({
  postId,
  authorName,
  createdAt,
  className = '',
}: PostFooterProps) {
  return (
    <header
      className={`flex mt-3 justify-between items-center text-gray-600 mb-4 sm:mb-6 sm:space-y-0 ${className}`}
    >
      <AvatarGradient id={postId} authorName={authorName} />

      <time className="text-sm sm:text-base">
        <figure className="fas fa-calendar mr-2" aria-hidden="true"></figure>
        {formatDate(createdAt)}
      </time>
    </header>
  );
}
