'use client';

import { Box } from '@mui/material';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CaseStudiesSection from '../components/Sections/CaseStudiesSection';

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <Box sx={{ pt: 8 }}>
        <CaseStudiesSection />
      </Box>
      <Footer />
    </>
  );
}