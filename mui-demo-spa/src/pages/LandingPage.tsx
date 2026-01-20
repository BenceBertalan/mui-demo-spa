import React from 'react';
import { Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
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
  );
};