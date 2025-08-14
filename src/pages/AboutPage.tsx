import React from 'react';
import { Box } from '@mui/material';
import AboutSection from '../components/Sections/AboutSection';

const AboutPage: React.FC = () => {
  return (
    <Box sx={{ pt: 8 }}>
      <AboutSection />
    </Box>
  );
};

export default AboutPage;