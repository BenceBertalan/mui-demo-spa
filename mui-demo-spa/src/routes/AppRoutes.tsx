import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { ShowcasePage } from '../pages/ShowcasePage';

interface AppRoutesProps {
  mode: 'light' | 'dark';
  onThemeToggle: () => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({ mode, onThemeToggle }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage mode={mode} onThemeToggle={onThemeToggle} />} />
        <Route path="/showcase" element={<ShowcasePage mode={mode} onThemeToggle={onThemeToggle} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};