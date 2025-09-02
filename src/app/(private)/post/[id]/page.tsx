import { fetchWithAuth } from '@/src/api/fetchWithAuth';
import { PostDetails } from '@/src/components/molecules';
import { API_ENDPOINTS } from '@/src/constants/api';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';

const NEXT_PUBLIC_APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

interface PageProps {
  params: Promise<{ id: string }>;
}

const getPost = async (id: string) => {
  try {
    const response = await fetchWithAuth(
      `${API_ENDPOINTS.POSTS.DETAIL(id)}`,
      {
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  if (!id || isNaN(parseInt(id))) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }

  const post = await getPost(id);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }

  return {
    title: `${post.title} | Social App`,
    description:
      post.body?.substring(0, 160) ||
      'Read this amazing post on our social platform.',
    openGraph: {
      title: post.title,
      description:
        post.body?.substring(0, 160) ||
        'Read this amazing post on our social platform.',
      type: 'article',
      url: `${NEXT_PUBLIC_APP_URL}/post/${id}`,
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [
            {
              url: `${NEXT_PUBLIC_APP_URL}/next.svg`,
              width: 1200,
              height: 630,
              alt: 'Social App',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description:
        post.body?.substring(0, 160) ||
        'Read this amazing post on our social platform.',
      images: post.image ? [post.image] : [`${NEXT_PUBLIC_APP_URL}/next.svg`],
    },
  };
}

export default async function PostDetailPage({ params }: PageProps) {
  const { id } = await params;
  if (!id || isNaN(parseInt(id))) {
    notFound();
  }
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return <PostDetails post={post} />;
}
