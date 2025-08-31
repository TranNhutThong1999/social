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
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
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
    createdAt: '2025-01-11T11:20:00Z',
    updatedAt: '2024-01-11T11:20:00Z',
    _count: {
      comments: 4,
    },
    commentsCount: 4,
    likesCount: 10,
  },
  {
    id: 6,
    title: 'CSS Grid vs Flexbox: When to Use Each',
    body: 'Understanding the differences between CSS Grid and Flexbox is essential for modern web layout. Learn when to use each layout system and how to combine them effectively for responsive designs.',
    authorId: 4,
    author: {
      id: 4,
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    user: {
      id: 4,
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    createdAt: '2024-01-10T13:45:00Z',
    updatedAt: '2024-01-10T13:45:00Z',
    _count: {
      comments: 6,
    },
    commentsCount: 6,
    likesCount: 18,
  },
  {
    id: 7,
    title: 'Testing React Components with Jest and React Testing Library',
    body: 'Writing effective tests for React components is crucial for maintaining code quality. Discover best practices for testing components, user interactions, and asynchronous operations.',
    authorId: 5,
    author: {
      id: 5,
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    user: {
      id: 5,
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    createdAt: '2024-01-09T08:30:00Z',
    updatedAt: '2024-01-09T08:30:00Z',
    _count: {
      comments: 9,
    },
    commentsCount: 9,
    likesCount: 22,
  },
  {
    id: 8,
    title: 'Server-Side Rendering with Next.js',
    body: 'Server-side rendering provides better SEO and performance. Learn how to implement SSR in Next.js applications and understand the differences between SSR, SSG, and ISR.',
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
    createdAt: '2024-01-08T15:20:00Z',
    updatedAt: '2024-01-08T15:20:00Z',
    _count: {
      comments: 4,
    },
    commentsCount: 4,
    likesCount: 14,
  },
  {
    id: 9,
    title: 'Modern JavaScript Features You Should Know',
    body: 'JavaScript has evolved significantly with ES6+ features. Explore modern JavaScript features like destructuring, spread operators, async/await, and modules that make coding more efficient.',
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
    createdAt: '2024-01-07T12:10:00Z',
    updatedAt: '2024-01-07T12:10:00Z',
    _count: {
      comments: 7,
    },
    commentsCount: 7,
    likesCount: 19,
  },
  {
    id: 10,
    title: 'Building Accessible Web Applications',
    body: 'Web accessibility is not just a legal requirement but a moral obligation. Learn how to build accessible React applications using ARIA attributes, semantic HTML, and keyboard navigation.',
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
    createdAt: '2024-01-06T10:55:00Z',
    updatedAt: '2024-01-06T10:55:00Z',
    _count: {
      comments: 5,
    },
    commentsCount: 5,
    likesCount: 16,
  },
  {
    id: 11,
    title: 'Database Design Patterns for Web Applications',
    body: 'Choosing the right database design pattern is crucial for application scalability. Explore different patterns like normalization, denormalization, and when to use each approach.',
    authorId: 4,
    author: {
      id: 4,
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    user: {
      id: 4,
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    createdAt: '2024-01-05T14:25:00Z',
    updatedAt: '2024-01-05T14:25:00Z',
    _count: {
      comments: 3,
    },
    commentsCount: 3,
    likesCount: 11,
  },
  {
    id: 12,
    title: 'Deploying Next.js Applications to Production',
    body: 'Deploying applications to production requires careful planning. Learn about different deployment strategies, environment configuration, and monitoring for Next.js applications.',
    authorId: 5,
    author: {
      id: 5,
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    user: {
      id: 5,
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    createdAt: '2024-01-04T09:40:00Z',
    updatedAt: '2024-01-04T09:40:00Z',
    _count: {
      comments: 8,
    },
    commentsCount: 8,
    likesCount: 20,
  },
  {
    id: 13,
    title: 'Security Best Practices for Web Applications',
    body: 'Web security is paramount in today\'s digital landscape. Learn about common vulnerabilities, authentication strategies, and security best practices for protecting your applications.',
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
    createdAt: '2024-01-03T16:15:00Z',
    updatedAt: '2024-01-03T16:15:00Z',
    _count: {
      comments: 6,
    },
    commentsCount: 6,
    likesCount: 17,
  },
  {
    id: 14,
    title: 'Microservices Architecture with Node.js',
    body: 'Microservices offer scalability and maintainability for large applications. Explore how to design and implement microservices using Node.js, including service communication and data management.',
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
    createdAt: '2024-01-02T11:30:00Z',
    updatedAt: '2024-01-02T11:30:00Z',
    _count: {
      comments: 4,
    },
    commentsCount: 4,
    likesCount: 13,
  },
  {
    id: 15,
    title: 'Progressive Web Apps: The Future of Web Development',
    body: 'Progressive Web Apps combine the best of web and mobile applications. Learn how to build PWAs with offline functionality, push notifications, and app-like user experiences.',
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
    createdAt: '2024-01-01T08:00:00Z',
    updatedAt: '2024-01-01T08:00:00Z',
    _count: {
      comments: 10,
    },
    commentsCount: 10,
    likesCount: 25,
  },
];
