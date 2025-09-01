import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { UserProfile } from './UserProfile';

export function NavigationMenu() {
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-4">
      {isAuthenticated ? (
        <UserProfile />
      ) : (
        <>
          <Link
            href={`/login?redirect=${encodeURIComponent(pathname)}`}
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link
            href={`/register?redirect=${encodeURIComponent(pathname)}`}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
          >
            Get Started
          </Link>
        </>
      )}
    </nav>
  );
}
