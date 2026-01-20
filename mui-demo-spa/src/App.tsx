import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme, darkTheme } from './theme';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={mode === 'light' ? theme : darkTheme}>
      <CssBaseline />
      <AppRoutes mode={mode} onThemeToggle={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
