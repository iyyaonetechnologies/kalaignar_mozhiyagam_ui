import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { lightTheme, darkTheme, AppTheme } from '@/theme';

type Mode = 'light' | 'dark' | 'system';
interface ThemeState {
  mode: Mode;
  current: AppTheme;
}

function systemPrefersDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const initialMode: Mode = (localStorage.getItem('theme:mode') as Mode) || 'system';
const derived =
  initialMode === 'dark' || (initialMode === 'system' && systemPrefersDark())
    ? darkTheme
    : lightTheme;

const initialState: ThemeState = { mode: initialMode, current: derived };

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
      localStorage.setItem('theme:mode', state.mode);
      const dark = state.mode === 'dark' || (state.mode === 'system' && systemPrefersDark());
      state.current = dark ? darkTheme : lightTheme;
    },
    toggleTheme(state) {
      const next = state.mode === 'dark' ? 'light' : 'dark';
      state.mode = next;
      localStorage.setItem('theme:mode', state.mode);
      state.current = next === 'dark' ? darkTheme : lightTheme;
    },
  },
});

export const { setTheme, toggleTheme } = slice.actions;
export const selectThemeMode = (s: { theme: ThemeState }) => s.theme.mode;
export const selectCurrentTheme = (s: { theme: ThemeState }) => s.theme.current;
export default slice.reducer;
