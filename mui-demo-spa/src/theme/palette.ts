export const lightPalette = {
  primary: {
    main: '#1976d2',
  },
  secondary: {
    main: '#42a5f5',
  },
};

export const darkPalette = {
  ...lightPalette,
  mode: 'dark' as const,
};