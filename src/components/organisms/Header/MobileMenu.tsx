import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { MenuIcon } from '../../icons';

export function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
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
        <nav className="md:hidden py-4 border-t border-gray-100">
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
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 font-medium"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-3">
              <Link
                href={`/login?redirect=${encodeURIComponent(pathname)}`}
                className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href={`/register?redirect=${encodeURIComponent(pathname)}`}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-medium text-center"
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
