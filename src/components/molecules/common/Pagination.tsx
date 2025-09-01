import { Button } from '../../atoms';
import { ArrowIcon } from '../../icons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = window.innerWidth < 640 ? 3 : 5; // Show fewer pages on mobile
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <nav className="flex flex-col items-center space-y-4">
      <section className="flex items-center space-x-1 sm:space-x-2">
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl"
          leftIcon={
            <ArrowIcon direction="left" className="w-3 h-3 sm:w-4 sm:h-4" />
          }
        >
          <p className="hidden sm:inline">Previous</p>
        </Button>

        {/* Page Numbers */}
        <aside className="flex items-center space-x-1">
          {getPageNumbers().map(page => (
            <Button
              key={page}
              onClick={() => onPageChange(page)}
              variant={page === currentPage ? 'primary' : 'outline'}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${
                page === currentPage ? '' : 'hover:bg-gray-50'
              }`}
            >
              {page}
            </Button>
          ))}
        </aside>

        {/* Next Button */}
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl"
          rightIcon={
            <ArrowIcon direction="right" className="w-3 h-3 sm:w-4 sm:h-4" />
          }
        >
          <p className="hidden sm:inline">Next</p>
        </Button>
      </section>

      {/* Quick Navigation */}
      {totalPages > 5 && (
        <aside className="flex items-center space-x-2 text-sm">
          <Button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            variant="ghost"
            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm"
          >
            First
          </Button>
          <p className="text-gray-400">•</p>
          <Button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            variant="ghost"
            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm"
          >
            Last
          </Button>
        </aside>
      )}
    </nav>
  );
}
