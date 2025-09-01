'use client';

import { AuthSkeleton } from '@/src/components/molecules/AuthSkeleton';
import { lazy, Suspense } from 'react';

const LoginPageContent = lazy(
	() => import('../../../modules/auth/components/LoginPageContent')
);

export default function LoginPage() {
	return (
		<Suspense fallback={<AuthSkeleton type="login" />}>
			<LoginPageContent />
		</Suspense>
	);
}
