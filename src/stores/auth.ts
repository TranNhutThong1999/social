import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/src/types/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (user: User) => void;
  setAuthenticated: (authenticated: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user: User) =>
        set({
          user,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
      updateUser: (user: User) =>
        set((state) => ({
          ...state,
          user,
        })),
      setAuthenticated: (authenticated: boolean) =>
        set({ isAuthenticated: authenticated }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.isAuthenticated ? state.user : null,
      }),
    }
  )
);
