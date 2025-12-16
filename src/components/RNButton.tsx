import { ButtonHTMLAttributes, forwardRef } from 'react';
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
    'bg-[var(--RN-Blue-100)] text-[var(--RN-Base-0)] shadow-sm hover:bg-[var(--RN-Blue-200)]  active:bg-[var(--RN-Blue-300)]',
  outline:
    'border border-[var(--RN-Base-30)] bg-transparent text-[var(--RN-Base-100)] hover:bg-[var(--RN-Base-10)]  active:bg-[var(--RN-Base-20)]',
  ghost:
    'bg-transparent text-[var(--RN-Base-80)] hover:bg-[var(--RN-Base-10)]  active:bg-[var(--RN-Base-20)]',
  link: 'bg-transparent text-[var(--RN-Blue-100)] underline-offset-4 hover:underline  p-0 h-auto',
  destructive:
    'bg-[var(--RN-Red-100)] text-[var(--RN-Base-0)] shadow-sm hover:bg-[var(--RN-Red-200)]  active:bg-[var(--RN-Red-300)]',
};

const sizeStyles = {
  xs: 'h-7 px-2.5 text-xs rounded-md',
  sm: 'h-8 px-3 text-sm rounded-md',
  md: 'h-10 px-4 text-sm rounded-md',
  lg: 'h-11 px-6 text-base rounded-lg',
  xl: 'h-12 px-8 text-lg rounded-lg',
};

const baseStyles = `
  inline-flex items-center justify-center gap-2 
  font-medium transition-all duration-200 
  focus:outline-none   
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  relative overflow-hidden
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
