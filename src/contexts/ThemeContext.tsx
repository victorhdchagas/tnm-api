import { createContext } from 'react';
import _Themes, { ThemeType as _ThemeType } from '../styles/Theme';

export const ThemeContext = createContext({
  theme: _Themes().dark,
  toggleTheme: () => { },
});
export type ThemeType = _ThemeType;
export const Themes = _Themes;
