import { HTMLAttributes, forwardRef } from 'react';
import { composeStyles } from '@/utils/composeStyles';

export interface RNBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  dot?: boolean;
}

const variantStyles = {
  default: 'bg-[var(--RN-Base-20)] text-[var(--RN-Base-80)]',
  primary: 'bg-[var(--RN-Blue-100)] text-[var(--RN-Base-0)]',
  success: 'bg-[var(--RN-Green-100)] text-[var(--RN-Base-0)]',
  warning: 'bg-[var(--RN-Orange-100)] text-[var(--RN-Base-0)]',
  danger: 'bg-[var(--RN-Red-100)] text-[var(--RN-Base-0)]',
  info: 'bg-[var(--RN-Light-Blue-100)] text-[var(--RN-Base-0)]',
};

const sizeStyles = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-0.5 text-xs',
  lg: 'px-2.5 py-1 text-sm',
};

const baseStyles = 'inline-flex items-center font-medium transition-colors';

export const RNBadge = forwardRef<HTMLSpanElement, RNBadgeProps>(function RNBadge(
  { className, variant = 'default', size = 'md', rounded = false, dot = false, children, ...props },
  ref
) {
  return (
    <span
      ref={ref}
      className={composeStyles(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        rounded ? 'rounded-full' : 'rounded',
        dot && 'w-2 h-2 p-0 rounded-full',
        className
      )}
      {...props}
    >
      {!dot && children}
    </span>
  );
});
