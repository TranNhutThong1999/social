interface ArrowIconProps {
  direction: 'left' | 'right';
  className?: string;
}

export function ArrowIcon({
  direction,
  className = 'w-4 h-4',
}: ArrowIconProps) {
  const path = direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7';

  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={path}
      />
    </svg>
  );
}
