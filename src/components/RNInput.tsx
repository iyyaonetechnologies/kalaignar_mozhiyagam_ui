import { composeStyles } from '@/utils/composeStyles';
import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, useState } from 'react';
import type { InputHTMLAttributes } from 'react';
import type { ComponentProps } from 'react';

export interface RNInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
}
type EyeIconProps = { isVisible: boolean } & Omit<ComponentProps<typeof Eye>, 'size'>;

const inputBaseStyles = `
  h-11 w-full rounded-xl border-2 bg-[var(--RN-Base-0)] px-4 py-3 text-sm 
  transition-all duration-300 
  placeholder:text-[var(--RN-Base-50)] 
  focus:outline-none focus:ring-2 focus:ring-offset-1
  disabled:cursor-not-allowed disabled:opacity-50
  shadow-sm hover:shadow-md
`;

const normalStyles =
  'border-[var(--RN-Base-30)] focus:border-[var(--RN-Blue-100)] focus:ring-[var(--RN-Blue-100)]/20 text-[var(--RN-Base-100)]';
const errorStyles =
  'border-[var(--RN-Red-100)] focus:border-[var(--RN-Red-100)] focus:ring-[var(--RN-Red-100)]/20 text-[var(--RN-Base-100)]';

export const EyeIcon = ({ isVisible, className, ...rest }: EyeIconProps) =>
  isVisible ? (
    <EyeOff
      className={`h-4 w-4 text-[var(--RN-Base-50)] ${className ?? ''}`}
      strokeWidth={2}
      aria-hidden="true"
      {...rest}
    />
  ) : (
    <Eye
      className={`h-4 w-4 text-[var(--RN-Base-50)] ${className ?? ''}`}
      strokeWidth={2}
      aria-hidden="true"
      {...rest}
    />
  );

export const RNInput = forwardRef<HTMLInputElement, RNInputProps>(function RNInput(
  {
    className,
    error,
    label,
    helperText,
    leftIcon,
    rightIcon,
    showPasswordToggle = false,
    type,
    id,
    ...props
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputId = id || props.name || `input-${Math.random().toString(36).slice(2)}`;
  const describedBy = helperText ? `${inputId}-desc` : undefined;
  const errorId = error ? `${inputId}-err` : undefined;

  const isPassword = type === 'password' && showPasswordToggle;
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  // const hasIcons = leftIcon || rightIcon || isPassword;

  return (
    <div className="grid gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className={composeStyles('text-sm font-medium text-gray-700', error && 'text-red-600')}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="h-4 w-4 text-gray-400">{leftIcon}</div>
          </div>
        )}

        <input
          id={inputId}
          ref={ref}
          type={inputType}
          className={composeStyles(
            inputBaseStyles,
            error ? errorStyles : normalStyles,
            leftIcon ? 'pl-10' : '',
            (rightIcon || isPassword) ? 'pr-10' : '',
            isFocused && 'shadow-sm',
            className
          )}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          aria-invalid={!!error || undefined}
          aria-describedby={describedBy}
          aria-errormessage={errorId}
          {...props}
        />

        {(rightIcon || isPassword) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {isPassword ? (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center justify-center p-1.5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <EyeIcon isVisible={showPassword} />
              </button>
            ) : (
              <div className="h-4 w-4 text-gray-400">{rightIcon}</div>
            )}
          </div>
        )}
      </div>

      {helperText && !error && (
        <p id={describedBy} className="text-xs text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p id={errorId} className="text-xs text-red-600 flex items-center gap-1">
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
});
