import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className = '',
}: SectionContainerProps) {
  return <section className={`fade-in ${className}`}>{children}</section>;
}
