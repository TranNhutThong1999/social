# Skeleton Components

This directory contains a comprehensive set of skeleton loading components designed to provide smooth loading experiences in your React applications.

## Components Overview

### Basic Skeleton Components

#### `SkeletonAvatar`
A skeleton component for user avatars with configurable sizes and rounded corners.

```tsx
import { SkeletonAvatar } from '@/components/atoms/ui';

// Basic usage
<SkeletonAvatar size="md" />

// With custom rounded corners
<SkeletonAvatar size="lg" rounded="full" />

// Custom size
<SkeletonAvatar size="custom" className="w-20 h-20" />
```

**Props:**
- `size`: `'sm' | 'md' | 'lg' | 'xl'` - Predefined sizes
- `rounded`: `'full' | 'lg' | 'md'` - Border radius variants
- `className`: Additional CSS classes
- Extends `HTMLAttributes<HTMLDivElement>`

#### `SkeletonIcon`
A skeleton component for icons with various sizes and rounded corners.

```tsx
import { SkeletonIcon } from '@/components/atoms/ui';

// Basic usage
<SkeletonIcon size="md" />

// With custom rounded corners
<SkeletonIcon size="lg" rounded="full" />
```

**Props:**
- `size`: `'xs' | 'sm' | 'md' | 'lg'` - Predefined sizes
- `rounded`: `'full' | 'lg' | 'md' | 'sm'` - Border radius variants
- `className`: Additional CSS classes
- Extends `HTMLAttributes<HTMLDivElement>`

#### `SkeletonButton`
A skeleton component for buttons with configurable sizes, variants, and widths.

```tsx
import { SkeletonButton } from '@/components/atoms/ui';

// Basic usage
<SkeletonButton size="md" />

// With variants
<SkeletonButton size="lg" variant="rounded" />

// Full width
<SkeletonButton width="full" />

// Custom width
<SkeletonButton width="custom" customWidth="w-32" />
```

**Props:**
- `size`: `'sm' | 'md' | 'lg'` - Button heights
- `variant`: `'default' | 'rounded' | 'square'` - Border radius styles
- `width`: `'auto' | 'full' | 'custom'` - Width options
- `customWidth`: Custom width class when `width="custom"`
- `className`: Additional CSS classes
- Extends `HTMLAttributes<HTMLDivElement>`

#### `SkeletonText`
A skeleton component for text lines with configurable sizes, widths, and multiple lines support.

```tsx
import { SkeletonText } from '@/components/atoms/ui';

// Single line
<SkeletonText size="md" width="3/4" />

// Multiple lines
<SkeletonText lines={3} spacing="normal" />

// Custom configuration
<SkeletonText 
  lines={5} 
  spacing="tight" 
  width="custom" 
  customWidth="max-w-lg"
/>
```

**Props:**
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'` - Text heights
- `width`: `'full' | '1/2' | '1/3' | '2/3' | '3/4' | '4/5' | '5/6' | 'custom'` - Width options
- `customWidth`: Custom width class when `width="custom"`
- `lines`: Number of text lines to render
- `spacing`: `'tight' | 'normal' | 'loose'` - Spacing between lines
- `className`: Additional CSS classes
- Extends `HTMLAttributes<HTMLDivElement>`

### Advanced Skeleton Components

#### `SkeletonImage`
A skeleton component for images with configurable sizes, aspect ratios, and rounded corners.

```tsx
import { SkeletonImage } from '@/components/atoms/ui';

// Basic usage
<SkeletonImage size="md" />

// With aspect ratios
<SkeletonImage size="lg" aspectRatio="video" />

// Custom dimensions
<SkeletonImage 
  size="custom" 
  width="300px" 
  height="200px" 
  aspectRatio="custom"
  customAspectRatio="aspect-[16/9]"
/>
```

**Props:**
- `size`: `'sm' | 'md' | 'lg' | 'xl' | 'custom'` - Predefined sizes
- `width`: Custom width when `size="custom"`
- `height`: Custom height when `size="custom"`
- `aspectRatio`: `'square' | 'video' | 'photo' | 'custom'` - Aspect ratio options
- `customAspectRatio`: Custom aspect ratio class
- `rounded`: `'none' | 'sm' | 'md' | 'lg' | 'full'` - Border radius variants
- `className`: Additional CSS classes
- Extends `HTMLAttributes<HTMLDivElement>`

#### `SkeletonCard`
A container component for organizing multiple skeleton elements with consistent styling.

```tsx
import { SkeletonCard } from '@/components/atoms/ui';

// Basic card
<SkeletonCard>
  <SkeletonText />
  <SkeletonAvatar size="md" />
</SkeletonCard>

// With variants
<SkeletonCard variant="detailed" padding="lg" shadow="md">
  {/* Card content */}
</SkeletonCard>
```

**Props:**
- `variant`: `'default' | 'compact' | 'detailed'` - Spacing variants
- `padding`: `'none' | 'sm' | 'md' | 'lg'` - Padding options
- `shadow`: `'none' | 'sm' | 'md' | 'lg'` - Shadow variants
- `rounded`: `'none' | 'sm' | 'md' | 'lg' | 'xl'` - Border radius variants
- `className`: Additional CSS classes
- Extends `HTMLAttributes<HTMLDivElement>`

## Usage Patterns

### Basic Loading State
```tsx
function PostCardSkeleton() {
  return (
    <SkeletonCard>
      <div className="flex items-center space-x-3">
        <SkeletonAvatar size="md" />
        <div className="flex-1 space-y-2">
          <SkeletonText width="3/4" />
          <SkeletonText width="1/2" />
        </div>
      </div>
      <SkeletonText lines={3} />
      <div className="flex space-x-2">
        <SkeletonButton size="sm" />
        <SkeletonButton size="sm" />
      </div>
    </SkeletonCard>
  );
}
```

### Complex Layout
```tsx
function UserProfileSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <SkeletonAvatar size="xl" />
        <div className="flex-1 space-y-3">
          <SkeletonText size="lg" width="2/3" />
          <SkeletonText width="1/3" />
          <div className="flex space-x-4">
            <SkeletonIcon size="sm" />
            <SkeletonText width="1/6" />
            <SkeletonIcon size="sm" />
            <SkeletonText width="1/6" />
          </div>
        </div>
      </div>

      {/* Content */}
      <SkeletonCard variant="detailed">
        <SkeletonText lines={4} />
        <SkeletonImage size="lg" aspectRatio="video" />
        <SkeletonText lines={2} />
      </SkeletonCard>
    </div>
  );
}
```

## Styling

All skeleton components use consistent styling:
- **Background**: `bg-gray-200 dark:bg-gray-700` for light/dark mode support
- **Animation**: `animate-pulse` for smooth loading animation
- **Border Radius**: Configurable through props
- **Spacing**: Consistent spacing using Tailwind CSS classes

## Accessibility

- All components extend `HTMLAttributes<HTMLDivElement>` for proper accessibility
- Use `forwardRef` for ref forwarding
- Proper `displayName` for React DevTools
- Semantic HTML structure

## Best Practices

1. **Consistent Sizing**: Use predefined sizes for consistency across your app
2. **Realistic Proportions**: Match skeleton dimensions to actual content
3. **Appropriate Lines**: Use `SkeletonText` with realistic line counts
4. **Dark Mode Support**: All components automatically support dark mode
5. **Custom Styling**: Use `className` prop for additional customization

## Examples

See `SkeletonExamples.tsx` for comprehensive usage examples of all components.
