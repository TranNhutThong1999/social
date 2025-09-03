import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

export interface SkeletonIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'custom';
  rounded?: 'full' | 'lg' | 'md' | 'sm';
}

const sizeClasses = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  custom: 'w-5 h-5',
} as const;

const roundedClasses = {
  full: 'rounded-full',
  lg: 'rounded-lg',
  md: 'rounded-md',
  sm: 'rounded-sm',
} as const;

export const SkeletonIcon = forwardRef<HTMLDivElement, SkeletonIconProps>(
  ({ size = 'md', rounded = 'md', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          sizeClasses[size],
          roundedClasses[rounded],
          'bg-gray-200 dark:bg-gray-300 animate-pulse',
          className
        )}
        {...props}
      />
    );
  }
);

SkeletonIcon.displayName = 'SkeletonIcon';
