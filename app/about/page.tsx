'use client';

import { Box } from '@mui/material';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import AboutSection from '../components/Sections/AboutSection';

export default function AboutPage() {
  return (
    <>
      <Header />
      <Box sx={{ pt: 8 }}>
        <AboutSection />
      </Box>
      <Footer />
    </>
  );
}