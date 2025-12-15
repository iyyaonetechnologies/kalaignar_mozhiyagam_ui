import { forwardRef, useState } from 'react';
import type { HTMLAttributes } from 'react';
import { composeStyles } from '@/utils/composeStyles';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';

export interface RNAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  showIcon?: boolean;
}

export const DefaultIcons = {
  success: <CheckCircle2 className="h-5 w-5" aria-hidden="true" />,
  warning: <AlertTriangle className="h-5 w-5" aria-hidden="true" />,
  error: <XCircle className="h-5 w-5" aria-hidden="true" />,
  info: <Info className="h-5 w-5" aria-hidden="true" />,
} as const;

const variantStyles = {
  success: {
    container: 'bg-[var(--RN-Green-10)] border-[var(--RN-Green-100)] text-[var(--RN-Green-400)]',
    icon: 'text-[var(--RN-Green-100)]',
  },
  warning: {
    container: 'bg-[var(--RN-Orange-10)] border-[var(--RN-Orange-100)] text-[var(--RN-Orange-400)]',
    icon: 'text-[var(--RN-Orange-100)]',
  },
  error: {
    container: 'bg-[var(--RN-Red-10)] border-[var(--RN-Red-100)] text-[var(--RN-Red-400)]',
    icon: 'text-[var(--RN-Red-100)]',
  },
  info: {
    container: 'bg-[var(--RN-Blue-10)] border-[var(--RN-Blue-100)] text-[var(--RN-Blue-400)]',
    icon: 'text-[var(--RN-Blue-100)]',
  },
};

const CloseIcon = () => <X className="h-4 w-4" aria-hidden="true" />;

export const RNAlert = forwardRef<HTMLDivElement, RNAlertProps>(function RNAlert(
  {
    className,
    variant = 'info',
    title,
    dismissible = false,
    onDismiss,
    icon,
    showIcon = true,
    children,
    ...props
  },
  ref
) {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  if (dismissed) return null;

  const styles = variantStyles[variant];
  const iconElement = icon || (showIcon ? DefaultIcons[variant] : null);

  return (
    <div
      ref={ref}
      role="alert"
      className={composeStyles(
        'rounded-md border p-4 transition-all duration-200',
        styles.container,
        className
      )}
      {...props}
    >
      <div className="flex">
        {iconElement && (
          <div className={composeStyles('flex-shrink-0', styles.icon)}>{iconElement}</div>
        )}

        <div className={iconElement ? 'ml-3' : ''}>
          {title && <h3 className="text-sm font-medium mb-1">{title}</h3>}

          <div className="text-sm">{children}</div>
        </div>

        {dismissible && (
          <div className="ml-auto pl-3">
            <button
              onClick={handleDismiss}
              className={composeStyles(
                'inline-flex rounded-md p-1.5 transition-colors',
                'hover:bg-black/5 focus:outline-none  ',
                styles.icon
              )}
              aria-label="Dismiss alert"
            >
              <CloseIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});
