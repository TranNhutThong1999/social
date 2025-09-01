import { ReactNode } from 'react';

interface NavigationContainerProps {
  children: ReactNode;
  className?: string;
}

export function NavigationContainer({
  children,
  className = '',
}: NavigationContainerProps) {
  return (
    <nav
      className={`flex items-center justify-between mb-4 sm:mb-6 ${className}`}
    >
      {children}
    </nav>
  );
}
