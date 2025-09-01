interface NotFoundMessageProps {
  message?: string;
  className?: string;
}

export function NotFoundMessage({
  message = 'Not found.',
  className = '',
}: NotFoundMessageProps) {
  return (
    <section className={`text-center py-8 text-gray-500 ${className}`}>
      {message}
    </section>
  );
}
