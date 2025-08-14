import React from 'react';
import { Box } from '@mui/material';
import ContactSection from '../components/Sections/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <Box sx={{ pt: 8 }}>
      <ContactSection />
    </Box>
  );
};

export default ContactPage;