import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { composeStyles } from '@/utils/composeStyles';

export interface RNBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  dot?: boolean;
}

const variantStyles = {
  default: 'bg-[var(--RN-Base-20)] text-[var(--RN-Base-80)] border border-[var(--RN-Base-30)]',
  primary: 'bg-gradient-to-r from-[var(--RN-Blue-100)] to-[var(--RN-Blue-200)] text-[var(--RN-Base-0)] shadow-md',
  success: 'bg-gradient-to-r from-[var(--RN-Green-100)] to-[var(--RN-Green-200)] text-[var(--RN-Base-0)] shadow-md',
  warning: 'bg-gradient-to-r from-[var(--RN-Orange-100)] to-[var(--RN-Orange-200)] text-[var(--RN-Base-0)] shadow-md',
  danger: 'bg-gradient-to-r from-[var(--RN-Red-100)] to-[var(--RN-Red-200)] text-[var(--RN-Base-0)] shadow-md',
  info: 'bg-gradient-to-r from-[var(--RN-Light-Blue-100)] to-[var(--RN-Blue-100)] text-[var(--RN-Base-0)] shadow-md',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
  lg: 'px-4 py-1.5 text-sm',
};

const baseStyles = 'inline-flex items-center font-semibold transition-all duration-300 hover:scale-105';

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
        rounded ? 'rounded-full' : 'rounded-xl',
        dot && 'w-2 h-2 p-0 rounded-full',
        className
      )}
      {...props}
    >
      {!dot && children}
    </span>
  );
});
