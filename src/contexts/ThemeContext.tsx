import React, {useState} from 'react';
import {useCallback} from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';
import {THEMES} from '../constants/themes';

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState('light');

  const switchTheme = useCallback((themeName: string) => {
    setTheme(themeName);
  }, []);

  const colors = THEMES.find(t => t.name === theme)?.colors;

  return (
    <StyledThemeProvider theme={{colors, switchTheme}}>
      {children}
    </StyledThemeProvider>
  );
};
