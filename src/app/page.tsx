'use client';

import { Suspense } from 'react';
import { HomePageContent } from '@/src/modules/home';
import { HomePageSkeleton } from '@/src/components/atoms/ui';

export default function HomePage() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePageContent />
    </Suspense>
  );
}
