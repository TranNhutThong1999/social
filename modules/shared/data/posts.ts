export interface Post {
  id: number;
  title: string;
  body: string;
  authorId: number;
  author?: {
    id: number;
    name: string;
    avatar?: string;
  };
  user?: {
    id: number;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  updatedAt: string;
  _count?: {
    comments: number;
  };
  commentsCount?: number;
  likesCount?: number;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js 15',
    body: 'Next.js 15 introduces exciting new features including the App Router, Server Components, and improved performance. In this post, we\'ll explore how to get started with the latest version and build modern web applications.',
    authorId: 1,
    author: {
      id: 1,
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    user: {
      id: 1,
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    _count: {
      comments: 5,
    },
    commentsCount: 5,
    likesCount: 12,
  },
  {
    id: 2,
    title: 'Mastering TypeScript in React Applications',
    body: 'TypeScript provides powerful type safety for React applications. Learn how to leverage TypeScript features like generics, utility types, and strict mode to build more robust and maintainable React components.',
    authorId: 2,
    author: {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    user: {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    createdAt: '2024-01-14T14:30:00Z',
    updatedAt: '2024-01-14T14:30:00Z',
    _count: {
      comments: 3,
    },
    commentsCount: 3,
    likesCount: 8,
  },
  {
    id: 3,
    title: 'Building Scalable APIs with Next.js API Routes',
    body: 'Next.js API Routes provide a powerful way to build backend functionality directly in your Next.js application. Discover best practices for creating scalable, secure, and performant APIs.',
    authorId: 3,
    author: {
      id: 3,
      name: 'Bob Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    user: {
      id: 3,
      name: 'Bob Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    createdAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T09:15:00Z',
    _count: {
      comments: 7,
    },
    commentsCount: 7,
    likesCount: 15,
  },
  {
    id: 4,
    title: 'Optimizing Performance in React Applications',
    body: 'Performance is crucial for modern web applications. Learn advanced techniques for optimizing React applications including code splitting, lazy loading, memoization, and performance monitoring.',
    authorId: 1,
    author: {
      id: 1,
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    user: {
      id: 1,
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    createdAt: '2024-01-12T16:45:00Z',
    updatedAt: '2024-01-12T16:45:00Z',
    _count: {
      comments: 2,
    },
    commentsCount: 2,
    likesCount: 6,
  },
  {
    id: 5,
    title: 'State Management with Zustand',
    body: 'Zustand is a lightweight state management solution for React. Explore how to use Zustand for managing application state, comparing it with other state management libraries like Redux and Context API.',
    authorId: 2,
    author: {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    user: {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    createdAt: '2024-01-11T11:20:00Z',
    updatedAt: '2024-01-11T11:20:00Z',
    _count: {
      comments: 4,
    },
    commentsCount: 4,
    likesCount: 10,
  },
];
