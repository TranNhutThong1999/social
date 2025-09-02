'use client';

import { AuthSkeleton } from '@/src/components/molecules/auth';
import { lazy, Suspense } from 'react';

const LoginPageContent = lazy(
  () => import('@/src/modules/auth/components/LoginContent')
);

export default function LoginPage() {
  return (
    <Suspense fallback={<AuthSkeleton type="login" />}>
      <LoginPageContent />
    </Suspense>
  );
}
