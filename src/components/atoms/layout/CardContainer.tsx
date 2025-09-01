import { ReactNode } from 'react';

interface CardContainerProps {
  children: ReactNode;
  className?: string;
}

export function CardContainer({
  children,
  className = '',
}: CardContainerProps) {
  return (
    <article
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </article>
  );
}
