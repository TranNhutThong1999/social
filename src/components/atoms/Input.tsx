import React from 'react';
import { cn } from '../../../modules/shared/utils/cn';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			label,
			error,
			leftIcon,
			rightIcon,
			fullWidth = true,
			id,
			...props
		},
		ref
	) => {
		const inputId =
			id || `input-${Math.random().toString(36).substr(2, 9)}`;

		const baseClasses =
			'px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base transition-all duration-200';

		const stateClasses = error
			? 'border-red-300 focus:ring-red-500 focus:border-red-500'
			: 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';

		const widthClass = fullWidth ? 'w-full' : '';

		return (
			<div className={widthClass}>
				{label && (
					<label
						htmlFor={inputId}
						className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
					>
						{label}
					</label>
				)}
				<div className="relative">
					{leftIcon && (
						<div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
							{leftIcon}
						</div>
					)}
					<input
						ref={ref}
						id={inputId}
						className={cn(
							baseClasses,
							stateClasses,
							widthClass,
							leftIcon && 'pl-10',
							rightIcon && 'pr-10',
							className
						)}
						{...props}
					/>
					{rightIcon && (
						<div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
							{rightIcon}
						</div>
					)}
				</div>
				{error && <p className="text-red-600 text-sm mt-1">{error}</p>}
			</div>
		);
	}
);

Input.displayName = 'Input';

export { Input };
