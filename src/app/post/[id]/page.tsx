import { PostDetails } from '@/modules/posts/components/PostDetails';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
	params: Promise<{ id: string }>;
}

async function getPost(id: string) {
	try {
		const headersList = await headers();
		const host = headersList.get('host');
		const protocol =
			process?.env.NODE_ENV === 'development' ? 'http' : 'https';
		const response = await fetch(`${protocol}://${host}/api/post/${id}`, {
			cache: 'no-store',
		});

		if (!response.ok) {
			if (response.status === 404) {
				return null;
			}
			throw new Error(`Failed to fetch post: ${response.status}`);
		}

		return response.json();
	} catch (error) {
		console.error('Error fetching post:', error);
		throw error;
	}
}

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
			post.content?.substring(0, 160) ||
			'Read this amazing post on our social platform.',
		openGraph: {
			title: post.title,
			description:
				post.content?.substring(0, 160) ||
				'Read this amazing post on our social platform.',
			type: 'article',
			authors: [post.author?.name || 'Anonymous'],
			publishedTime: post.createdAt,
			modifiedTime: post.updatedAt,
		},
		twitter: {
			card: 'summary',
			title: post.title,
			description:
				post.content?.substring(0, 160) ||
				'Read this amazing post on our social platform.',
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
