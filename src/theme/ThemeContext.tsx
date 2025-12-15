import { createContext, useContext, useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectCurrentTheme, selectThemeMode } from '@/store/themeSlice';
import type { AppTheme } from './index';

const ThemeContext = createContext<AppTheme | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector(selectCurrentTheme);
  const mode = useAppSelector(selectThemeMode);
  useEffect(() => {
    const el = document.documentElement;
    el.setAttribute('data-theme', mode === 'dark' ? 'dark' : 'default');
  }, [mode]);
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
