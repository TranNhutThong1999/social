'use client';

import { Post } from '@/src/types/types';
import {
  BackButton,
  PostHeader,
  PostContent,
  NavigationContainer,
  ArticleContainer,
} from '@/src/components/atoms';
import { useRouter } from 'next/navigation';

interface PostDetailContentProps {
  post: Post;
}

export function PostDetailContent({ post }: PostDetailContentProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <ArticleContainer>
      <NavigationContainer>
        <BackButton onClick={handleBackClick} />
      </NavigationContainer>

      <PostContent title={post.title} body={post.body} />

      <PostHeader
        postId={post.id}
        authorName={post.author?.name || 'Unknown'}
        createdAt={post.createdAt}
      />
    </ArticleContainer>
  );
}
