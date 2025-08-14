'use client';

import { Box } from '@mui/material';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ContactSection from '../components/Sections/ContactSection';

export default function ContactPage() {
  return (
    <>
      <Header />
      <Box sx={{ pt: 8 }}>
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
}