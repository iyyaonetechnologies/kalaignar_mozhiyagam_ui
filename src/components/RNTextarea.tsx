import type { TextareaHTMLAttributes } from 'react';
export interface RNTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export function RNTextarea({ className, error, ...props }: RNTextareaProps) {
  return (
    <div className="grid gap-1.5">
      <textarea
        className={
          'min-h-[96px] w-full rounded-md border bg-[var(--RN-Base-0)] px-3 py-2 outline-none text-[var(--RN-Base-100)] placeholder:text-[var(--RN-Base-50)] transition-all duration-300 ' +
          (error
            ? 'border-[var(--RN-Red-100)] focus:border-[var(--RN-Red-100)] focus:ring-1 focus:ring-[var(--RN-Red-100)] '
            : 'border-[var(--RN-Base-20)] focus:border-[var(--RN-Blue-100)] focus:ring-1 focus:ring-[var(--RN-Blue-100)] ') +
          (className || '')
        }
        {...props}
      />
      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1">
          <svg className="h-3 w-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
