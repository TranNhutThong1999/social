export interface Comment {
  id: number;
  body: string;
  postId: number;
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
}

export const comments: Comment[] = [
  {
    id: 1,
    body: 'Great article! Next.js 15 looks really promising with all the new features.',
    postId: 1,
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
    createdAt: '2024-01-15T11:00:00Z',
    updatedAt: '2024-01-15T11:00:00Z',
  },
  {
    id: 2,
    body: 'I\'ve been using Next.js for a while now, and the App Router is a game-changer!',
    postId: 1,
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
    createdAt: '2024-01-15T12:30:00Z',
    updatedAt: '2024-01-15T12:30:00Z',
  },
  {
    id: 3,
    body: 'TypeScript has completely changed how I write React code. The type safety is incredible!',
    postId: 2,
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
    createdAt: '2024-01-14T15:00:00Z',
    updatedAt: '2024-01-14T15:00:00Z',
  },
  {
    id: 4,
    body: 'API Routes are so convenient for full-stack development. No need for a separate backend!',
    postId: 3,
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
    createdAt: '2024-01-13T10:00:00Z',
    updatedAt: '2024-01-13T10:00:00Z',
  },
  {
    id: 5,
    body: 'Performance optimization is crucial for user experience. Great tips in this post!',
    postId: 4,
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
    createdAt: '2024-01-12T17:00:00Z',
    updatedAt: '2024-01-12T17:00:00Z',
  },
  {
    id: 6,
    body: 'Zustand is much simpler than Redux. I love how lightweight it is!',
    postId: 5,
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
    createdAt: '2024-01-11T12:00:00Z',
    updatedAt: '2024-01-11T12:00:00Z',
  },
  {
    id: 7,
    body: 'The comparison with other state management solutions was really helpful.',
    postId: 5,
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
    createdAt: '2024-01-11T13:30:00Z',
    updatedAt: '2024-01-11T13:30:00Z',
  },
];
