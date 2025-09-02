'use client';

import { AuthSkeleton } from '@/src/components/molecules/auth';
import { lazy, Suspense } from 'react';

const RegisterPageContent = lazy(
  () => import('@/src/modules/auth/components/RegisterContent')
);

export default function RegisterPage() {
  return (
    <Suspense fallback={<AuthSkeleton type="register" />}>
      <RegisterPageContent />
    </Suspense>
  );
}
