import { ReactNode } from 'react';

interface ArticleWrapperProps {
  children: ReactNode;
  className?: string;
}

export function ArticleWrapper({
  children,
  className = '',
}: ArticleWrapperProps) {
  return (
    <article className={`lg:max-w-6xl mx-auto ${className}`}>
      {children}
    </article>
  );
}
