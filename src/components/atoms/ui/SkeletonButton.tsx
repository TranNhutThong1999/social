import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

export interface SkeletonButtonProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'custom';
  variant?: 'default' | 'rounded' | 'square';
  width?: 'auto' | 'full' | 'custom';
  customWidth?: string;
}

const sizeClasses = {
  sm: 'h-8 px-3',
  md: 'h-10 px-4',
  lg: 'h-12 px-6',
  custom: 'h-10 px-4', // Default custom size
} as const;

const variantClasses = {
  default: 'rounded-lg',
  rounded: 'rounded-full',
  square: 'rounded',
} as const;

const widthClasses = {
  auto: 'w-auto',
  full: 'w-full',
  custom: '',
} as const;

export const SkeletonButton = forwardRef<HTMLDivElement, SkeletonButtonProps>(
  (
    {
      size = 'md',
      variant = 'default',
      width = 'auto',
      customWidth,
      className,
      ...props
    },
    ref
  ) => {
    const sizeClass = sizeClasses[size];
    const variantClass = variantClasses[variant];
    const widthClass = width === 'custom' ? customWidth : widthClasses[width];

    return (
      <div
        ref={ref}
        className={cn(
          sizeClass,
          variantClass,
          widthClass,
          'bg-gray-200 dark:bg-gray-300 animate-pulse',
          className
        )}
        {...props}
      />
    );
  }
);

SkeletonButton.displayName = 'SkeletonButton';
