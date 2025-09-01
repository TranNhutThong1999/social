import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

export interface SkeletonCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'compact' | 'detailed';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const variantClasses = {
  default: 'space-y-4',
  compact: 'space-y-3',
  detailed: 'space-y-6',
} as const;

const paddingClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
} as const;

const shadowClasses = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
} as const;

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
} as const;

export const SkeletonCard = forwardRef<HTMLDivElement, SkeletonCardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      shadow = 'sm',
      rounded = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
          variantClasses[variant],
          paddingClasses[padding],
          shadowClasses[shadow],
          roundedClasses[rounded],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SkeletonCard.displayName = 'SkeletonCard';
