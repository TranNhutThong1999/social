import { useAuth } from '@/src/modules/auth/hooks/useAuth';

export function UserProfile() {
  const { user, logout, isLogoutLoading } = useAuth();

  return (
    <>
      <aside className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
        <figure className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
          <figcaption className="text-white text-sm font-medium">
            {user?.name?.charAt(0).toUpperCase()}
          </figcaption>
        </figure>
        <span className="text-gray-700 font-medium">{user?.name}</span>
      </aside>
      <button
        onClick={logout}
        disabled={isLogoutLoading}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2.5 rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isLogoutLoading ? 'Signing Out...' : 'Sign Out'}
      </button>
    </>
  );
}
