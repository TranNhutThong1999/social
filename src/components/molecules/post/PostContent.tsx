interface PostContentProps {
  title: string;
  body: string;
  className?: string;
}

export function PostContent({ title, body, className = '' }: PostContentProps) {
  return (
    <article className={className}>
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
        {title}
      </h1>

      <section className="prose max-w-none text-gray-700 leading-relaxed text-sm sm:text-base">
        {body}
      </section>
    </article>
  );
}
