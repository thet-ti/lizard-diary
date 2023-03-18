import {DARK_THEME} from './dark';
import {LIGHT_THEME} from './light';

export interface IThemeProps {
  name: string;
  colors: {
    primary: string;
    darkPrimary: string;
    secondary: string;
    text: string;
    title: string;
    background: string;
    secondaryBackground: string;
  };
}

export const THEMES = [DARK_THEME, LIGHT_THEME];
