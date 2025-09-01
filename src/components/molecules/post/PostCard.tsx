import { AvatarGradient } from '@/src/components/atoms';
import {
  CalendarIcon,
  CommentIcon,
  ChevronRightIcon,
} from '@/src/components/icons';
import { formatDate } from '@/src/utils';
import Link from 'next/link';
import { Post } from '@/src/types/types';
import { memo } from 'react';

interface PostCardProps {
  post: Post;
}

export const PostCard = memo(function PostCard({ post }: PostCardProps) {
  const authorName = post.author?.name || 'Unknown';
  const commentsCount = post.commentsCount || 0;
  return (
    <Link href={`/post/${post.id}`}>
      <article className="group h-full">
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
          <header className="bg-gradient-to-r from-indigo-50 to-purple-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
              {post.title}
            </h3>
            <aside className="flex justify-between items-center sm:justify-between space-y-2 sm:space-y-0 text-sm">
              <AvatarGradient authorName={authorName} id={post.id} />
              <time className="text-gray-500 flex items-center ml-5 text-sm">
                <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {formatDate(post.createdAt)}
              </time>
            </aside>
          </header>

          {/* Card Body */}
          <section className="p-4 sm:p-6 flex-grow flex flex-col">
            <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base flex-grow">
              {post.body}
            </p>

            {/* Card Footer */}
            <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
              <aside className="flex items-center space-x-4">
                <span className="flex items-center text-xs sm:text-sm text-gray-500 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <CommentIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
                  {commentsCount} comments
                </span>
              </aside>

              <span className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-200 group-hover:translate-x-1 transform text-sm sm:text-base">
                Read more
                <ChevronRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </footer>
          </section>
        </article>
      </article>
    </Link>
  );
});
