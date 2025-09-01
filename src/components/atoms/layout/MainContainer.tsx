import { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
  className?: string;
}

export function MainContainer({
  children,
  className = '',
}: MainContainerProps) {
  return <main className={`container mx-auto ${className}`}>{children}</main>;
}
