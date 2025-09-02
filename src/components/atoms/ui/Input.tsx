import React, { useId } from 'react';
import { cn } from '../../../utils/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  isRequired?: boolean;
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
      isRequired = false,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = useId();
    const baseClasses =
      'py-2.5 sm:py-3 border rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base transition-all duration-200';

    const stateClasses = error
      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';

    const widthClass = fullWidth ? 'w-full' : '';

    const paddingClasses =
      leftIcon && rightIcon
        ? 'pl-10 sm:pl-12 pr-10 sm:pr-12'
        : leftIcon
        ? 'pl-10 sm:pl-12 pr-3 sm:pr-4'
        : rightIcon
        ? 'pl-3 sm:pl-4 pr-10 sm:pr-12'
        : 'px-3 sm:px-4';

    console.log(rightIcon);
    return (
      <fieldset className={widthClass}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
          >
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <aside className="relative">
          {leftIcon && (
            <figure className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </figure>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              baseClasses,
              stateClasses,
              widthClass,
              paddingClasses,
              className
            )}
            {...props}
          />
          {rightIcon && (
            <figure className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </figure>
          )}
        </aside>
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </fieldset>
    );
  }
);

Input.displayName = 'Input';

export { Input };
