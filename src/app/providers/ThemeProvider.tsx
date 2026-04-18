import { createContext, type ReactNode } from 'react';
import useTheme from '@/features/mode-button/useTheme';

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useTheme();

  const onThemeButtonClick = () => {
    setTheme((prev: string) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ onThemeButtonClick, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
