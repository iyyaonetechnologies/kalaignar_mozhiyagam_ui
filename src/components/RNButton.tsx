import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { composeStyles } from '@/utils/composeStyles';
import { Loader2 } from 'lucide-react';

type Variant = 'solid' | 'outline' | 'ghost' | 'link' | 'destructive';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface RNButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles = {
  solid:
    'bg-gradient-to-r from-[var(--RN-Blue-100)] to-[var(--RN-Blue-200)] text-[var(--RN-Base-0)] shadow-md hover:shadow-xl hover:from-[var(--RN-Blue-200)] hover:to-[var(--RN-Blue-300)]',
  outline:
    'border-2 border-[var(--RN-Base-30)] bg-transparent text-[var(--RN-Base-100)] hover:bg-[var(--RN-Base-10)] hover:border-[var(--RN-Blue-100)]',
  ghost:
    'bg-transparent text-[var(--RN-Base-80)] hover:bg-[var(--RN-Base-10)] hover:text-[var(--RN-Blue-100)]',
  link: 'bg-transparent text-[var(--RN-Blue-100)] underline-offset-4 hover:underline p-0 h-auto shadow-none',
  destructive:
    'bg-gradient-to-r from-[var(--RN-Red-100)] to-[var(--RN-Red-200)] text-[var(--RN-Base-0)] shadow-md hover:shadow-xl hover:from-[var(--RN-Red-200)] hover:to-[var(--RN-Red-300)]',
};

const sizeStyles = {
  xs: 'h-7 px-2.5 text-xs rounded-lg',
  sm: 'h-8 px-3 text-sm rounded-lg',
  md: 'h-10 px-4 text-sm rounded-xl',
  lg: 'h-11 px-6 text-base rounded-xl',
  xl: 'h-12 px-8 text-lg rounded-2xl',
};

const baseStyles = `
  inline-flex items-center justify-center gap-2 
  font-semibold transition-all duration-300 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--RN-Blue-100)]   
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  relative overflow-hidden
  shadow-sm hover:shadow-lg
  transform hover:scale-105 active:scale-95
`;

export const RNButton = forwardRef<HTMLButtonElement, RNButtonProps>(function RNButton(
  {
    className,
    variant = 'solid',
    size = 'md',
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    children,
    disabled,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={composeStyles(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className={`animate-spin`} aria-hidden="true" size={size} />
          <span className="opacity-70">Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children && <span>{children}</span>}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
});
