import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

export interface SkeletonImageProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  width?: string;
  height?: string;
  aspectRatio?: 'square' | 'video' | 'photo' | 'custom';
  customAspectRatio?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
  custom: '',
} as const;

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  photo: 'aspect-[4/3]',
  custom: '',
} as const;

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const;

export const SkeletonImage = forwardRef<HTMLDivElement, SkeletonImageProps>(
  (
    {
      size = 'md',
      width,
      height,
      aspectRatio = 'square',
      customAspectRatio,
      rounded = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const sizeClass = size === 'custom' ? '' : sizeClasses[size];
    const aspectRatioClass =
      aspectRatio === 'custom'
        ? customAspectRatio
        : aspectRatioClasses[aspectRatio];
    const roundedClass = roundedClasses[rounded];

    const customStyles = {
      width: size === 'custom' ? width : undefined,
      height: size === 'custom' ? height : undefined,
    };

    return (
      <div
        ref={ref}
        className={cn(
          sizeClass,
          aspectRatioClass,
          roundedClass,
          'bg-gray-200 dark:bg-gray-300 animate-pulse',
          className
        )}
        style={customStyles}
        {...props}
      />
    );
  }
);

SkeletonImage.displayName = 'SkeletonImage';
