# UI Components

This directory contains atomic UI components including comprehensive skeleton loading components for creating smooth loading states throughout the application.

## Skeleton Components

The skeleton components have been completely refactored with modern React patterns, TypeScript support, and enhanced functionality. For detailed documentation, see [SKELETON_README.md](./SKELETON_README.md).

### Available Skeleton Components

- **`SkeletonAvatar`** - Configurable avatar skeletons with size and rounded corner options
- **`SkeletonButton`** - Button skeletons with size, variant, and width configurations  
- **`SkeletonIcon`** - Icon skeletons with size and rounded corner options
- **`SkeletonText`** - Text skeletons with multi-line support and width configurations
- **`SkeletonImage`** - Image skeletons with aspect ratio and size options
- **`SkeletonCard`** - Container component for organizing skeleton layouts

### Quick Examples

```tsx
import { 
  SkeletonAvatar, 
  SkeletonText, 
  SkeletonCard,
  SkeletonButton 
} from '@/components/atoms/ui';

// Basic usage
<SkeletonAvatar size="md" rounded="full" />
<SkeletonText lines={3} spacing="normal" />
<SkeletonButton size="lg" variant="rounded" />

// Complex layout
<SkeletonCard variant="detailed" padding="lg">
  <div className="flex items-center space-x-3">
    <SkeletonAvatar size="md" />
    <div className="flex-1 space-y-2">
      <SkeletonText width="3/4" />
      <SkeletonText width="1/2" />
    </div>
  </div>
  <SkeletonText lines={2} />
</SkeletonCard>
```

### Key Features

- **Modern React Patterns**: Uses `forwardRef` and proper TypeScript interfaces
- **Dark Mode Support**: Automatic light/dark theme support
- **Flexible Configuration**: Extensive prop options for customization
- **Accessibility**: Proper HTML attributes and ref forwarding
- **Performance**: CSS-based animations for smooth loading states


