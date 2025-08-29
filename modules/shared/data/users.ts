
export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  avatar?: string;
  createdAt: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    username: 'janesmith',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-02T00:00:00Z',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    username: 'bobjohnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-03T00:00:00Z',
  },
];

// Hash passwords for demo accounts
export const userCredentials = [
  {
    email: 'john@example.com',
    password: 'password123',
  },
  {
    email: 'jane@example.com',
    password: 'password123',
  },
  {
    email: 'bob@example.com',
    password: 'password123',
  },
];
