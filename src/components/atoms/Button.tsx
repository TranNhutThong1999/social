import React from 'react';
import { cn } from '../../utils/cn';
import { LoadingSpinner } from './LoadingSpinner';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| 'primary'
		| 'secondary'
		| 'outline'
		| 'ghost'
		| 'danger'
		| 'default';
	size?: 'sm' | 'md' | 'lg';
	isLoading?: boolean;
	loadingText?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = 'primary',
			size = 'md',
			isLoading = false,
			loadingText,
			leftIcon,
			rightIcon,
			fullWidth = false,
			disabled,
			children,
			...props
		},
		ref
	) => {
		const baseClasses =
			'inline-flex items-center justify-center font-medium transition-all duration-300 transform shadow-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100 disabled:hover:shadow-lg enabled:hover:scale-105 enabled:hover:shadow-xl';

		const variantClasses = {
			primary:
				'bg-gradient-to-r from-indigo-500 to-purple-600 text-white enabled:hover:from-indigo-600 enabled:hover:to-purple-700 focus:ring-indigo-500',
			secondary:
				'bg-gradient-to-r from-gray-500 to-gray-600 text-white enabled:hover:from-gray-600 enabled:hover:to-gray-700 focus:ring-gray-500',
			outline:
				'border-2 border-indigo-500 text-indigo-500 enabled:hover:bg-indigo-500 enabled:hover:text-white focus:ring-indigo-500',
			ghost: 'text-gray-700 enabled:hover:bg-gray-100 focus:ring-gray-500',
			danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white enabled:hover:from-red-600 enabled:hover:to-red-700 focus:ring-red-500',
			default: '',
		};

		const sizeClasses = {
			sm: 'px-4 py-2 text-sm',
			md: 'px-6 py-2.5 sm:py-3 text-sm sm:text-base',
			lg: 'px-8 py-3 sm:py-4 text-base sm:text-lg',
		};

		const widthClass = fullWidth ? 'w-full' : '';

		return (
			<button
				className={cn(
					'cursor-pointer',
					baseClasses,
					variantClasses[variant],
					sizeClasses[size],
					widthClass,
					className
				)}
				ref={ref}
				disabled={disabled || isLoading}
				{...props}
			>
				{isLoading ? (
					<div className="flex items-center justify-center space-x-2">
						<LoadingSpinner />
						<span>{loadingText || 'Loading...'}</span>
					</div>
				) : (
					<>
						{leftIcon && <span className="mr-2">{leftIcon}</span>}
						{children}
						{rightIcon && <span className="ml-2">{rightIcon}</span>}
					</>
				)}
			</button>
		);
	}
);

Button.displayName = 'Button';

export { Button };
