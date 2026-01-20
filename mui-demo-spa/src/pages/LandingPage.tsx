import React, { useState } from 'react';
import { Typography, Button, Grid, Card, CardContent, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/AppBar';
import { Sidebar } from '../components/layout/Drawer';
import { ContainerWrapper } from '../components/layout/Container';

interface LandingPageProps {
  mode: 'light' | 'dark';
  onThemeToggle: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ mode, onThemeToggle }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header onMenuClick={handleDrawerToggle} mode={mode} onThemeToggle={onThemeToggle} />
      <Sidebar open={drawerOpen} onClose={handleDrawerToggle} />
      <ContainerWrapper>
        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', p: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to MUI Demo
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Explore Material-UI components in a modern, responsive React app.
            </Typography>
            <Button variant="contained" color="primary" size="large" component={Link} to="/showcase">
              Explore Showcase
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Components</Typography>
                    <Typography>Buttons, Forms, Tables, and more.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Theming</Typography>
                    <Typography>Customizable themes and dark mode.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Responsive</Typography>
                    <Typography>Mobile-friendly layouts.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Modern</Typography>
                    <Typography>Built with React and TypeScript.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </Box>
  );
};