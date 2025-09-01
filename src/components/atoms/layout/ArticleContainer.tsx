import { ReactNode } from 'react';

interface ArticleContainerProps {
  children: ReactNode;
  className?: string;
}

export function ArticleContainer({
  children,
  className = '',
}: ArticleContainerProps) {
  return (
    <article className={`p-4 sm:p-6 lg:p-8 ${className}`}>{children}</article>
  );
}
