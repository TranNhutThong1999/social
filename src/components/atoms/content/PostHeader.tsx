import { AvatarGradient } from './AvatarGradient';
import { formatDate } from '@/src/utils';

interface PostHeaderProps {
  postId: string | number;
  authorName: string;
  createdAt: string;
  className?: string;
}

export function PostHeader({
  postId,
  authorName,
  createdAt,
  className = '',
}: PostHeaderProps) {
  return (
    <header
      className={`flex justify-between items-center text-gray-600 mb-4 sm:mb-6 sm:space-y-0 ${className}`}
    >
      <AvatarGradient postId={postId} authorName={authorName} />

      <time className="text-sm sm:text-base">
        <figure className="fas fa-calendar mr-2" aria-hidden="true"></figure>
        {formatDate(createdAt)}
      </time>
    </header>
  );
}
