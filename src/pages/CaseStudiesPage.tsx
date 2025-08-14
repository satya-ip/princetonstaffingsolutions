import React from 'react';
import { Box } from '@mui/material';
import CaseStudiesSection from '../components/Sections/CaseStudiesSection';

const CaseStudiesPage: React.FC = () => {
  return (
    <Box sx={{ pt: 8 }}>
      <CaseStudiesSection />
    </Box>
  );
};

export default CaseStudiesPage;