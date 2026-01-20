import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeToggle } from '../showcase/ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
  mode: 'light' | 'dark';
  onThemeToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, mode, onThemeToggle }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          MUI Demo
        </Typography>
        <ThemeToggle mode={mode} onToggle={onThemeToggle} />
      </Toolbar>
    </AppBar>
  );
};