// src/components/RNLabel.tsx
import { forwardRef, type HTMLAttributes } from 'react';
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

export type SemanticColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'white'
  | 'black'
  | 'inherit';

type BaseProps = Omit<HTMLAttributes<HTMLLabelElement>, 'color'> & {
  /** i18n key or plain text; supports `key1::key2` joining like your Angular impl */
  label?: string;
  /** whether to show (optional) tag */
  required?: boolean;
  /** htmlFor association */
  htmlFor?: string;
  /** Semantic color name or custom CSS color value */
  color?: SemanticColor | string;
  variant?: Variant;
  statusLabel?: StatusLabel;
  /** optional translator; if provided we’ll split by `::` and translate parts */
  translateFn?: (key: string) => string;
};

const variantClassMap: Record<Variant, string> = {
  // Headings - Responsive sizes (reduced for better desktop readability)
  h1: 'text-2xl md:text-3xl lg:text-4xl leading-tight font-normal',
  h1Bold: 'text-2xl md:text-3xl lg:text-4xl leading-tight font-bold',
  h2: 'text-xl md:text-2xl lg:text-3xl leading-snug font-normal',
  h2Bold: 'text-xl md:text-2xl lg:text-3xl leading-snug font-bold',
  h3: 'text-lg md:text-xl lg:text-2xl leading-snug font-normal',
  h3Bold: 'text-lg md:text-xl lg:text-2xl leading-snug font-bold',
  // Paragraphs - Responsive sizes
  p1: 'text-base md:text-lg leading-relaxed font-normal',
  p1Bold: 'text-base md:text-lg leading-relaxed font-semibold',
  p2: 'text-sm md:text-base leading-relaxed font-normal',
  p2Bold: 'text-sm md:text-base leading-relaxed font-semibold',
  p3: 'text-xs md:text-sm leading-relaxed font-normal',
  p3Bold: 'text-xs md:text-sm leading-relaxed font-semibold',
  p4: 'text-[11px] md:text-xs leading-relaxed font-normal',
  p4Bold: 'text-[11px] md:text-xs leading-relaxed font-semibold',
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

const semanticColorMap: Record<SemanticColor, string> = {
  primary: 'text-[var(--RN-Blue-100)]',
  secondary: 'text-[var(--RN-Base-60)]',
  muted: 'text-[var(--RN-Base-50)]',
  success: 'text-[var(--RN-Green-100)]',
  danger: 'text-[var(--RN-Red-100)]',
  warning: 'text-[var(--RN-Orange-100)]',
  info: 'text-[var(--RN-Light-Blue-100)]',
  white: 'text-[var(--RN-Base-0)]',
  black: 'text-[var(--RN-Base-100)]',
  inherit: 'text-inherit',
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
  const { t } = useTranslation();
  const base = 'fn-label inline-flex items-baseline gap-1'; // mirrors Angular class prefix

  const variantCls = variantClassMap[variant] ?? 'text-sm';
  const statusCls = statusLabel ? statusClassMap[statusLabel] : '';
  
  // Handle color: semantic name, custom value, or default to black
  let colorCls = semanticColorMap.black; // Default color
  let styleColor: React.CSSProperties | undefined = undefined;
  
  if (color) {
    // Check if it's a semantic color name
    if (color in semanticColorMap) {
      colorCls = semanticColorMap[color as SemanticColor];
    } else {
      // It's a custom CSS color value
      colorCls = ''; // Clear default when using custom color
      styleColor = { color };
    }
  }

  // replicate Angular: "key1::key2" => translate each, join with space
  const renderLabel = (raw?: string) => {
    if (!raw) return null;
    return raw
      .split('::')
      .map((p) => t(p.trim()))
      .join(' ');
  };

  return (
    <label
      ref={ref}
      htmlFor={htmlFor || label}
      className={composeStyles(base, variantCls, colorCls, statusCls, className)}
      style={styleColor}
      {...rest}
    >
      {label ? renderLabel(label) : children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
});
