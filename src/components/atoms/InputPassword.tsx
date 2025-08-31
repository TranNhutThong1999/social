import React, { useState } from 'react';
import { Input, InputProps } from './Input';
import { cn } from '../../utils/cn';

export interface InputPasswordProps extends Omit<InputProps, 'type'> {
	showToggle?: boolean;
}
const EyeIcon = ({ className }: { className?: string }) => (
	<svg
		className={cn('w-5 h-5', className)}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
		/>
	</svg>
);

const EyeSlashIcon = ({ className }: { className?: string }) => (
	<svg
		className={cn('w-5 h-5', className)}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
		/>
	</svg>
);
const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
	({ showToggle = true, className, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState(false);

		const togglePasswordVisibility = () => {
			setShowPassword(!showPassword);
		};

		return (
			<Input
				ref={ref}
				type={showPassword ? 'text' : 'password'}
				rightIcon={
					showToggle ? (
						<div
							onClick={togglePasswordVisibility}
							className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:text-gray-600"
							aria-label={
								showPassword ? 'Hide password' : 'Show password'
							}
						>
							{showPassword ? (
								<EyeSlashIcon className="text-gray-500" />
							) : (
								<EyeIcon className="text-gray-500" />
							)}
						</div>
					) : undefined
				}
				className={className}
				{...props}
			/>
		);
	}
);

InputPassword.displayName = 'InputPassword';

export { InputPassword };
