'use client';

import { Post } from '@/src/types/types';
import {
  BackButton,
  NavigationContainer,
  ArticleContainer,
} from '@/src/components/atoms';
import { useRouter } from 'next/navigation';
import { PostContent } from './PostContent';
import { PostFooter } from './PostFooter';
import { ROUTES } from '@/src/constants/routes';

interface PostDetailContentProps {
  post: Post;
}

export function PostDetailContent({ post }: PostDetailContentProps) {
  const router = useRouter();

  const handleBackClick = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      try {
        router.back();
      } catch (error) {
        router.push(ROUTES.HOME);
      }
    } else {
      router.push(ROUTES.HOME);
    }
  };

  return (
    <ArticleContainer>
      <NavigationContainer>
        <BackButton onClick={handleBackClick} />
      </NavigationContainer>

      <PostContent title={post.title} body={post.body} />

      <PostFooter
        postId={post.id}
        userName={post.user?.name || 'Unknown'}
        createdAt={post.createdAt}
      />
    </ArticleContainer>
  );
}
