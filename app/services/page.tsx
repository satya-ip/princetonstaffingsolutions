'use client';

import { Box } from '@mui/material';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ServicesSection from '../components/Sections/ServicesSection';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <Box sx={{ pt: 8 }}>
        <ServicesSection />
      </Box>
      <Footer />
    </>
  );
}