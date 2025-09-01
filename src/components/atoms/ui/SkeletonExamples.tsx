import React from 'react';
import {
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
  SkeletonIcon,
  SkeletonImage,
  SkeletonText,
} from './index';

export const SkeletonExamples: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Skeleton Components Examples</h1>

      {/* Basic Skeleton Components */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Components</h2>

        <div className="flex items-center space-x-4">
          <SkeletonAvatar size="sm" />
          <SkeletonAvatar size="md" />
          <SkeletonAvatar size="lg" />
          <SkeletonAvatar size="xl" />
        </div>

        <div className="flex items-center space-x-4">
          <SkeletonIcon size="xs" />
          <SkeletonIcon size="sm" />
          <SkeletonIcon size="md" />
          <SkeletonIcon size="lg" />
        </div>

        <div className="flex items-center space-x-4">
          <SkeletonButton size="sm" />
          <SkeletonButton size="md" />
          <SkeletonButton size="lg" />
        </div>

        <div className="space-y-2">
          <SkeletonText size="xs" />
          <SkeletonText size="sm" />
          <SkeletonText size="md" />
          <SkeletonText size="lg" />
          <SkeletonText size="xl" />
        </div>
      </section>

      {/* Advanced Skeleton Components */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Advanced Components</h2>

        <div className="grid grid-cols-2 gap-4">
          <SkeletonImage size="md" aspectRatio="square" />
          <SkeletonImage size="md" aspectRatio="video" />
          <SkeletonImage size="md" aspectRatio="photo" />
          <SkeletonImage size="custom" width="200px" height="150px" />
        </div>

        <div className="flex space-x-4">
          <SkeletonButton variant="default" width="auto" />
          <SkeletonButton variant="rounded" width="auto" />
          <SkeletonButton variant="square" width="auto" />
          <SkeletonButton width="full" />
        </div>

        <div className="space-y-2">
          <SkeletonText lines={3} spacing="tight" />
          <SkeletonText lines={2} spacing="normal" width="2/3" />
          <SkeletonText lines={4} spacing="loose" width="1/2" />
        </div>
      </section>

      {/* Skeleton Card Examples */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Card Layouts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Compact Card */}
          <SkeletonCard variant="compact" padding="sm" shadow="sm">
            <div className="flex items-center space-x-3">
              <SkeletonAvatar size="md" />
              <div className="flex-1 space-y-2">
                <SkeletonText width="3/4" />
                <SkeletonText width="1/2" />
              </div>
            </div>
            <SkeletonText lines={2} />
            <div className="flex space-x-2">
              <SkeletonButton size="sm" />
              <SkeletonButton size="sm" />
            </div>
          </SkeletonCard>

          {/* Detailed Card */}
          <SkeletonCard variant="detailed" padding="lg" shadow="md">
            <div className="flex items-center space-x-4">
              <SkeletonAvatar size="lg" />
              <div className="flex-1 space-y-3">
                <SkeletonText size="lg" width="2/3" />
                <SkeletonText width="1/3" />
                <div className="flex space-x-2">
                  <SkeletonIcon size="sm" />
                  <SkeletonText width="1/4" />
                  <SkeletonIcon size="sm" />
                  <SkeletonText width="1/4" />
                </div>
              </div>
            </div>
            <SkeletonImage size="lg" aspectRatio="video" />
            <SkeletonText lines={3} />
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <SkeletonButton size="sm" />
                <SkeletonButton size="sm" />
              </div>
              <SkeletonText width="1/6" />
            </div>
          </SkeletonCard>
        </div>
      </section>

      {/* Custom Configurations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Custom Configurations</h2>

        <div className="flex items-center space-x-4">
          <SkeletonAvatar size="custom" className="w-20 h-20" />
          <SkeletonIcon size="custom" className="w-8 h-8" rounded="full" />
          <SkeletonButton
            size="custom"
            className="h-12 w-32"
            variant="rounded"
          />
        </div>

        <div className="space-y-2">
          <SkeletonText
            size="custom"
            className="h-5"
            width="custom"
            customWidth="max-w-md"
          />
          <SkeletonText lines={5} spacing="tight" className="max-w-lg" />
        </div>
      </section>
    </div>
  );
};
