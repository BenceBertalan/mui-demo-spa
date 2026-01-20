import React from 'react';
import { Container as MuiContainer } from '@mui/material';

interface ContainerWrapperProps {
  children: React.ReactNode;
}

export const ContainerWrapper: React.FC<ContainerWrapperProps> = ({ children }) => {
  return (
    <MuiContainer maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      {children}
    </MuiContainer>
  );
};