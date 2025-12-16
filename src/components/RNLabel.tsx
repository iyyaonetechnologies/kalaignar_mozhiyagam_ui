// src/components/RNLabel.tsx
import { forwardRef, HTMLAttributes } from 'react';
import { composeStyles } from '@/utils/composeStyles';
import { useTranslation } from 'react-i18next';

export type Variant =
  | 'h1'
  | 'h1Bold'
  | 'h2'
  | 'h2Bold'
  | 'h3'
  | 'h3Bold'
  | 'p1'
  | 'p1Bold'
  | 'p2'
  | 'p2Bold'
  | 'p3'
  | 'p3Bold'
  | 'p4'
  | 'p4Bold'
  | 'interactionLarge'
  | 'interactionLargeBold'
  | 'interactionMedium'
  | 'interactionMediumBold'
  | 'interactionSmall'
  | 'interactionSmallBold'
  | 'avatarLabel';

export type StatusLabel =
  | 'Standard'
  | 'Success'
  | 'Hot'
  | 'Warning'
  | 'Disabled'
  | 'RHBPremierBanking';

type BaseProps = Omit<HTMLAttributes<HTMLLabelElement>, 'color'> & {
  /** i18n key or plain text; supports `key1::key2` joining like your Angular impl */
  label?: string;
  /** whether to show (optional) tag */
  required?: boolean;
  /** htmlFor association */
  htmlFor?: string;
  /** accepts hex, rgb, var(--token), etc. */
  color?: string;
  variant?: Variant;
  statusLabel?: StatusLabel;
  /** optional translator; if provided we’ll split by `::` and translate parts */
  translateFn?: (key: string) => string;
};

const variantClassMap: Record<Variant, string> = {
  // Headings
  h1: 'text-3xl leading-tight font-normal',
  h1Bold: 'text-3xl leading-tight font-semibold',
  h2: 'text-2xl leading-snug font-normal',
  h2Bold: 'text-2xl leading-snug font-semibold',
  h3: 'text-xl leading-snug font-normal',
  h3Bold: 'text-xl leading-snug font-semibold',
  // Paragraphs
  p1: 'text-base leading-relaxed font-normal',
  p1Bold: 'text-base leading-relaxed font-semibold',
  p2: 'text-sm leading-relaxed font-normal',
  p2Bold: 'text-sm leading-relaxed font-semibold',
  p3: 'text-xs leading-relaxed font-normal',
  p3Bold: 'text-xs leading-relaxed font-semibold',
  p4: 'text-[11px] leading-relaxed font-normal',
  p4Bold: 'text-[11px] leading-relaxed font-semibold',
  // Interaction sizes
  interactionLarge: 'text-base font-medium',
  interactionLargeBold: 'text-base font-bold',
  interactionMedium: 'text-sm font-medium',
  interactionMediumBold: 'text-sm font-bold',
  interactionSmall: 'text-xs font-medium',
  interactionSmallBold: 'text-xs font-bold',
  // Misc
  avatarLabel: 'text-[10px] leading-none font-medium',
};

const statusClassMap: Record<StatusLabel, string> = {
  Standard: 'text-[var(--RN-Base-100)]',
  Success: 'text-[var(--RN-Green-100)]',
  Hot: 'text-[var(--RN-Red-100)]',
  Warning: 'text-[var(--RN-Orange-100)]',
  Disabled: 'text-[var(--RN-Base-50)]',
  RHBPremierBanking: 'text-[var(--RHB-Blue-100)]',
};

export const RNLabel = forwardRef<HTMLLabelElement, BaseProps>(function RNLabel(
  {
    label,
    required = false,
    htmlFor,
    color,
    className,
    variant = 'p1',
    statusLabel,
    children,
    ...rest
  },
  ref
) {
  const { i18n } = useTranslation();
  const base = 'fn-label inline-flex items-baseline gap-1'; // mirrors Angular class prefix

  const variantCls = variantClassMap[variant] ?? 'text-sm';
  const statusCls = statusLabel ? statusClassMap[statusLabel] : '';
  const styleColor = color ? { color } : undefined;

  // replicate Angular: "key1::key2" => translate each, join with space
  const renderLabel = (raw?: string) => {
    if (!raw) return null;
    return raw
      .split('::')
      .map((p) => i18n.t(p.trim()))
      .join(' ');
  };

  return (
    <label
      ref={ref}
      htmlFor={htmlFor || label}
      className={composeStyles(base, variantCls, statusCls, className)}
      style={styleColor}
      {...rest}
    >
      {label ? renderLabel(label) : children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
});
