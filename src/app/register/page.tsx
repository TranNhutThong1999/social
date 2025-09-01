'use client';

import { AuthSkeleton } from '@/src/components/molecules/AuthSkeleton';
import { lazy, Suspense } from 'react';

const RegisterPageContent = lazy(
	() => import('../../../modules/auth/components/RegisterContent')
);

export default function RegisterPage() {
	return (
		<Suspense fallback={<AuthSkeleton type="register" />}>
			<RegisterPageContent />
		</Suspense>
	);
}
