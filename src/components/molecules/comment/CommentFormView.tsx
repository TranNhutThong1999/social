import { Button } from '@/src/components/atoms';

interface IProps {
  onSubmit: (e: React.FormEvent) => void;
  register: any;
  errors: any;
  isSubmitting: boolean;
}

export function CommentFormView({
  onSubmit,
  register,
  errors,
  isSubmitting,
}: IProps) {
  return (
    <section className="mb-6 sm:mb-8">
      <article className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6">
        <form onSubmit={onSubmit}>
          <textarea
            {...register('body', {
              required: 'Please enter a comment',
              minLength: {
                value: 1,
                message: 'Comment cannot be empty',
              },
              maxLength: {
                value: 1000,
                message: 'Comment must not exceed 1000 characters',
              },
            })}
            rows={3}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
            placeholder="Write your comment..."
            disabled={isSubmitting}
          />
          {errors.body && (
            <p className="text-red-600 text-xs sm:text-sm mt-1">
              {errors.body.message}
            </p>
          )}
          <footer className="flex justify-end mt-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-xs sm:text-sm"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </footer>
        </form>
      </article>
    </section>
  );
}
