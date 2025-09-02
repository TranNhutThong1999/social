import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/src/modules/auth/hooks/useAuth';
import { MenuIcon } from '../../icons';

export function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout, isLogoutLoading } = useAuth();
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        <MenuIcon className="w-6 h-6 text-gray-700" isOpen={isMobileMenuOpen} />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full  right-0 w-full bg-white rounded-xl shadow-lg border border-gray-200 py-4 px-4 z-50">
          {isAuthenticated ? (
            <div className="flex flex-col space-y-4">
              <aside className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-xl">
                <figure className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <figcaption className="text-white text-lg font-medium">
                    {user?.name?.charAt(0).toUpperCase()}
                  </figcaption>
                </figure>
                <div>
                  <p className="text-gray-900 font-medium">{user?.name}</p>
                  <p className="text-sm text-gray-500">Signed in</p>
                </div>
              </aside>
              <button
                onClick={logout}
                disabled={isLogoutLoading}
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLogoutLoading ? 'Signing Out...' : 'Sign Out'}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-3">
              <Link
                href={`/login?redirect=${encodeURIComponent(pathname)}`}
                className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href={`/register?redirect=${encodeURIComponent(pathname)}`}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          )}
        </nav>
      )}
    </>
  );
}
