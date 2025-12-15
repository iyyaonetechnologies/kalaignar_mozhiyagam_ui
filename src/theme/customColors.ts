export const customColors = {
  base: {
    background: 'var(--RN-Base-0)',
    surface: 'var(--RN-Base-10)',
    overlay: 'var(--RN-Base-20)',
  },
  text: {
    primary: 'var(--RN-Base-100)',
    secondary: 'var(--RN-Base-70)',
    disabled: 'var(--RN-Base-50)',
    inverse: 'var(--RN-Base-0)',
  },
  primary: {
    default: 'var(--RN-Blue-100)',
    foreground: 'white',
    hover: 'var(--RN-Blue-90)',
    pressed: 'var(--RN-Blue-200)',
  },
  accent: { default: 'var(--RN-Purple-100)', foreground: 'white' },
  border: { subtle: 'var(--RN-Base-20)', strong: 'var(--RN-Base-40)', focus: 'var(--RN-Blue-100)' },
  status: {
    success: 'var(--RN-Green-100)',
    warning: 'var(--RN-Orange-100)',
    error: 'var(--RN-Red-100)',
    info: 'var(--RN-Light-Blue-100)',
  },
} as const;
