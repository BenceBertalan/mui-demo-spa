import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

export const ShowcasePage: React.FC = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
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
  );
};