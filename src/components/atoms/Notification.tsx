'use client';

import { useEffect } from 'react';

interface NotificationProps {
	message: string;
	type: 'success' | 'warning' | 'error' | 'info';
	onClose: () => void;
	duration?: number;
}

export function Notification({
	message,
	type,
	onClose,
	duration = 3000,
}: NotificationProps) {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	const getTypeStyles = () => {
		switch (type) {
			case 'success':
				return 'bg-green-500';
			case 'warning':
				return 'bg-yellow-500';
			case 'error':
				return 'bg-red-500';
			case 'info':
			default:
				return 'bg-blue-500';
		}
	};

	return (
		<aside
			className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium fade-in ${getTypeStyles()}`}
			role="alert"
			aria-live="polite"
		>
			{message}
		</aside>
	);
}
