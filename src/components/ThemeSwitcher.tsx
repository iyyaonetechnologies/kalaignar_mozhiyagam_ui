import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectThemeMode, toggleTheme } from '@/store/themeSlice';
import { Sun, Moon } from 'lucide-react';
import { RNButton } from './RNButton';
import RNLanguageSwitcher from './RNLanguageSwticher';

export function ThemeSwitcher() {
  const mode = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();

  const isDark = mode === 'dark';

  // CSS variable colors
  const sunColor = 'var(--RN-Orange-100)'; // Bright orange for Sun icon
  const moonColor = 'var(--RN-Premier-Blue-100)'; // Deep blue for Moon icon

  return (
    <div className="flex gap-2">
      <RNButton variant="ghost" onClick={() => dispatch(toggleTheme())} aria-label="Toggle Theme">
        {isDark ? (
          <Sun className="h-5 w-5 transition-transform duration-300" style={{ color: sunColor }} />
        ) : (
          <Moon
            className="h-5 w-5 transition-transform duration-300"
            style={{ color: moonColor }}
          />
        )}
      </RNButton>

      {/* switch language */}
      <RNLanguageSwitcher />
    </div>
  );
}
