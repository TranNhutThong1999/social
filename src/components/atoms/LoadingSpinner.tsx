interface LoadingSpinnerProps {
	size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
	sm: {
		container: 'w-6 h-6',
		border: 'border-2',
		dot: 'w-1 h-1',
	},
	md: {
		container: 'w-8 h-8',
		border: 'border-3',
		dot: 'w-1.5 h-1.5',
	},
	lg: {
		container: 'w-12 h-12',
		border: 'border-4',
		dot: 'w-2 h-2',
	},
	xl: {
		container: 'w-16 h-16',
		border: 'border-4',
		dot: 'w-3 h-3',
	},
};

export function LoadingSpinner({ size = 'sm' }: LoadingSpinnerProps) {
	const sizeConfig = sizeClasses[size];

	return (
		<div className="flex flex-col items-center justify-center space-y-4">
			<div className="relative">
				{/* Outer ring */}
				<div
					className={`${sizeConfig.container} ${sizeConfig.border} border-indigo-200 rounded-full animate-pulse`}
				></div>
				{/* Inner spinning ring */}
				<div
					className={`absolute top-0 left-0 ${sizeConfig.container} ${sizeConfig.border} border-transparent border-t-indigo-500 border-r-purple-500 rounded-full animate-spin`}
				></div>
				{/* Center dot */}
				<div
					className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizeConfig.dot} bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse`}
				></div>
			</div>
		</div>
	);
}
