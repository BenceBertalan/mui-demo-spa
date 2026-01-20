import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Header } from '../components/layout/AppBar';
import { Sidebar } from '../components/layout/Drawer';
import { ContainerWrapper } from '../components/layout/Container';

interface ShowcasePageProps {
  mode: 'light' | 'dark';
  onThemeToggle: () => void;
}

export const ShowcasePage: React.FC<ShowcasePageProps> = ({ mode, onThemeToggle }) => {
  const [value, setValue] = useState('1');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header onMenuClick={handleDrawerToggle} mode={mode} onThemeToggle={onThemeToggle} />
      <Sidebar open={drawerOpen} onClose={handleDrawerToggle} />
      <ContainerWrapper>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="MUI components showcase tabs">
                <Tab label="Inputs" value="1" />
                <Tab label="Data" value="2" />
                <Tab label="Navigation" value="3" />
                <Tab label="Feedback" value="4" />
                <Tab label="Layout" value="5" />
                <Tab label="Overlays" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1">Inputs Components</TabPanel>
            <TabPanel value="2">Data Components</TabPanel>
            <TabPanel value="3">Navigation Components</TabPanel>
            <TabPanel value="4">Feedback Components</TabPanel>
            <TabPanel value="5">Layout Components</TabPanel>
            <TabPanel value="6">Overlays Components</TabPanel>
          </TabContext>
        </Box>
      </ContainerWrapper>
    </Box>
  );
};