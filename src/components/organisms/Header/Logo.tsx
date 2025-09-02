import Link from 'next/link';
import { EditIcon } from '../../icons';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
      <figure className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
        <EditIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </figure>
      <figcaption>
        <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          StoryHub
        </h2>
        <p className="text-xs text-gray-500 -mt-1 hidden sm:block">
          Share Your Stories
        </p>
      </figcaption>
    </Link>
  );
}
