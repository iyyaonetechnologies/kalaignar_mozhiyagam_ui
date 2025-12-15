import { spacing } from './spacing';
import { radius } from './radius';
import { typography } from './typography';
import { customColors } from './customColors';

export interface AppTheme {
  mode: 'light' | 'dark';
  colors: typeof customColors;
  spacing: typeof spacing;
  radius: typeof radius;
  typography: typeof typography;
}

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: customColors,
  spacing,
  radius,
  typography,
};
export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: customColors,
  spacing,
  radius,
  typography,
};
