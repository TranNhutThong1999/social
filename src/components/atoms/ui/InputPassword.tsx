'use client';

import React, { useState } from 'react';
import { Input, InputProps } from './Input';
import { EyeIcon, EyeSlashIcon } from '../../icons';
import { cn } from '../../../utils/cn';

export interface InputPasswordProps extends Omit<InputProps, 'type'> {
  showToggle?: boolean;
}

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
              aria-label={showPassword ? 'Hide password' : 'Show password'}
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
