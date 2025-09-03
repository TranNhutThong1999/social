import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

export interface SkeletonAvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  rounded?: 'full' | 'lg' | 'md';
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
  custom: 'w-10 h-10',
} as const;

const roundedClasses = {
  full: 'rounded-full',
  lg: 'rounded-lg',
  md: 'rounded-md',
} as const;

export const SkeletonAvatar = forwardRef<HTMLDivElement, SkeletonAvatarProps>(
  ({ size = 'md', rounded = 'full', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          sizeClasses[size],
          roundedClasses[rounded],
          'bg-gray-100 dark:bg-gray-200 animate-pulse',
          className
        )}
        {...props}
      />
    );
  }
);

SkeletonAvatar.displayName = 'SkeletonAvatar';
