import { createTheme } from '@mui/material/styles';
import { lightPalette } from './palette';
import { typography } from './typography';
import { breakpoints } from './breakpoints';

export const theme = createTheme({
  cssVariables: true,
  palette: lightPalette,
  typography,
  breakpoints,
});

export const darkTheme = createTheme({
  ...theme,
  palette: {
    ...lightPalette,
    mode: 'dark',
  },
});