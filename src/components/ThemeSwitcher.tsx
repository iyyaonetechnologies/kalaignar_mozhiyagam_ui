import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { RNButton } from './RNButton';
import RNLanguageSwitcher from './RNLanguageSwticher';

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check current theme on mount
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setIsDark(currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'default' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setIsDark(!isDark);
    // Save to localStorage for persistence
    localStorage.setItem('theme', newTheme);
  };

  // CSS variable colors
  const sunColor = 'var(--RN-Orange-100)'; // Bright orange for Sun icon
  const moonColor = 'var(--RN-Premier-Blue-100)'; // Deep blue for Moon icon

  return (
    <div className="flex gap-2">
      <RNButton variant="ghost" onClick={toggleTheme} aria-label="Toggle Theme">
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
