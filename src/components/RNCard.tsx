import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { composeStyles } from '@/utils/composeStyles';

export interface RNCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hoverable?: boolean;
}

const variantStyles = {
  default: 'bg-[var(--RN-Base-0)] border border-[var(--RN-Base-20)] shadow-sm',
  elevated: 'bg-[var(--RN-Base-0)] shadow-xl border-0',
  outlined: 'bg-transparent border-2 border-[var(--RN-Base-30)] shadow-none',
  filled: 'bg-[var(--RN-Base-10)] border-0 shadow-none',
};

const paddingStyles = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
};

const baseStyles = 'rounded-2xl transition-all duration-300 backdrop-blur-sm';

export const RNCard = forwardRef<HTMLDivElement, RNCardProps>(function RNCard(
  { className, variant = 'default', padding = 'md', hoverable = false, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={composeStyles(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        hoverable && 'hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
