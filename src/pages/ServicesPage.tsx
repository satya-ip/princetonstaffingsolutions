import React from 'react';
import { Box } from '@mui/material';
import ServicesSection from '../components/Sections/ServicesSection';

const ServicesPage: React.FC = () => {
  return (
    <Box sx={{ pt: 8 }}>
      <ServicesSection />
    </Box>
  );
};

export default ServicesPage;