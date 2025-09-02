'use client';

import { Suspense } from 'react';
import { HomePageContent } from '@/src/modules/home';

export default function HomePage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-4"></div>}>
      <HomePageContent />
    </Suspense>
  );
}
