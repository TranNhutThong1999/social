import { ArrowIcon } from '../../icons/ArrowIcon';

interface BackButtonProps {
  onClick: () => void;
  text?: string;
  className?: string;
}

export function BackButton({
  onClick,
  text = 'Quay lại',
  className = '',
}: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 ${className}`}
      type="button"
      aria-label={`Go back to previous page`}
    >
      <ArrowIcon direction="left" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
      <p className="text-medium">{text}</p>
    </button>
  );
}
