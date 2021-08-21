export type ThemeOption = 'normal' | 'stop';

export type ButtonTheme = {
  base: string;
  hover: string;
  active: string;
};

export interface ButtonThemes {
  normal: ButtonTheme;
  stop: ButtonTheme;
}
