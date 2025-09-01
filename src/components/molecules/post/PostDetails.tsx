import { CommentsSection } from '@/src/components/organisms/CommentsSection';
import { PostDetailContent } from './PostDetailContent';
import {
  NotFoundMessage,
  MainContainer,
  CardContainer,
  SectionContainer,
  ArticleWrapper,
} from '@/src/components/atoms';
import { Post } from '@/src/types/types';

interface IProps {
  post?: Post;
}

export function PostDetails({ post }: IProps) {
  if (!post) {
    return <NotFoundMessage message="Post not found." />;
  }

  return (
    <MainContainer>
      <ArticleWrapper>
        <SectionContainer>
          <CardContainer>
            <PostDetailContent post={post} />
            <CommentsSection postId={post.id} />
          </CardContainer>
        </SectionContainer>
      </ArticleWrapper>
    </MainContainer>
  );
}
