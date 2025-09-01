import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

export interface SkeletonTextProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  width?:
    | 'full'
    | '1/2'
    | '1/3'
    | '1/4'
    | '2/3'
    | '3/4'
    | '4/5'
    | '5/6'
    | '1/6'
    | 'custom';
  customWidth?: string;
  lines?: number;
  spacing?: 'tight' | 'normal' | 'loose';
}

const sizeClasses = {
  xs: 'h-2',
  sm: 'h-3',
  md: 'h-4',
  lg: 'h-6',
  xl: 'h-8',
  custom: 'h-10',
} as const;

const widthClasses = {
  full: 'w-full',
  '1/2': 'w-1/2',
  '1/3': 'w-1/3',
  '1/4': 'w-1/4',
  '2/3': 'w-2/3',
  '3/4': 'w-3/4',
  '4/5': 'w-4/5',
  '5/6': 'w-5/6',
  '1/6': 'w-1/6',
  custom: '',
} as const;

const spacingClasses = {
  tight: 'space-y-1',
  normal: 'space-y-2',
  loose: 'space-y-3',
} as const;

export const SkeletonText = forwardRef<HTMLDivElement, SkeletonTextProps>(
  (
    {
      size = 'md',
      width = 'full',
      customWidth,
      lines = 1,
      spacing = 'normal',
      className,
      ...props
    },
    ref
  ) => {
    const sizeClass = sizeClasses[size];
    const widthClass = width === 'custom' ? customWidth : widthClasses[width];
    const spacingClass = spacingClasses[spacing];

    if (lines === 1) {
      return (
        <div
          ref={ref}
          className={cn(
            sizeClass,
            widthClass,
            'bg-gray-200 dark:bg-gray-300 rounded animate-pulse',
            className
          )}
          {...props}
        />
      );
    }

    return (
      <div ref={ref} className={cn(spacingClass, className)} {...props}>
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className={cn(
              sizeClass,
              index === lines - 1 ? widthClass : 'w-full',
              'bg-gray-200 dark:bg-gray-300 rounded animate-pulse'
            )}
          />
        ))}
      </div>
    );
  }
);

SkeletonText.displayName = 'SkeletonText';
