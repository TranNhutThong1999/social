'use client';

import { useEffect } from 'react';
import { Button } from '../components/atoms';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-md w-full mx-4 text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
            <i className="fas fa-exclamation-triangle text-3xl text-red-500"></i>
          </div>
        </div>

        {/* Error Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong
        </h1>

        {/* Error Message */}
        <div className="mb-8">
          <p className="text-gray-600 mb-2">
            Sorry, an error occurred while loading this page.
          </p>
          {error.message && (
            <div className="bg-gray-50 rounded-lg p-3 mt-3">
              <p className="text-sm text-gray-500 font-mono break-words">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="lg"
            fullWidth
            leftIcon={<i className="fas fa-redo"></i>}
          >
            Try Again
          </Button>

          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
            size="md"
            fullWidth
            leftIcon={<i className="fas fa-home"></i>}
          >
            Go Home
          </Button>
        </div>

        {/* Help Text */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            If the error persists, please contact support
          </p>
        </div>
      </div>
    </div>
  );
}
