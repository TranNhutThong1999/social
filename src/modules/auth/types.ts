export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  avatar?: string;
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthResponse {
  user: User;
  success: boolean;
}
