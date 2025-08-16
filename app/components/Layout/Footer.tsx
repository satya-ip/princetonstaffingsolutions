'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  Chip,
} from '@mui/material';
import {
  Code,
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Twitter,
  GitHub,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        'Cloud Infrastructure',
        'Cybersecurity',
        'Custom Development',
        'Data Analytics',
        'Performance Optimization',
        '24/7 Support',
      ],
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'Case Studies',
        'Blog',
        'Contact',
      ],
    },
    {
      title: 'Resources',
      links: [
        'Documentation',
        'API Reference',
        'Community',
        'Support Center',
        'Status Page',
        'Security',
      ],
    },
  ];

  const socialLinks = [
    { icon: <LinkedIn />, url: '#', name: 'LinkedIn' },
    { icon: <Twitter />, url: '#', name: 'Twitter' },
    { icon: <GitHub />, url: '#', name: 'GitHub' },
    { icon: <Email />, url: 'mailto:hello@techcorp.com', name: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
            : 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Code sx={{ fontSize: 32, color: '#64b5f6' }} />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #64b5f6 30%, #f48fb1 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  TechCorp
                </Typography>
              </Box>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, opacity: 0.9 }}>
                Transforming businesses through innovative IT solutions. 
                We deliver cutting-edge technology services that drive growth 
                and enhance operational efficiency.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ fontSize: 16, opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    hello@techcorp.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ fontSize: 16, opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOn sx={{ fontSize: 16, opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    San Francisco, CA
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {[
                  'AWS Certified',
                  'ISO 27001',
                  'SOC 2 Compliant',
                ].map((cert) => (
                  <Chip
                    key={cert}
                    label={cert}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      fontSize: '0.7rem',
                    }}
                    variant="outlined"
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={2.67} key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 3, fontWeight: 600, color: '#64b5f6' }}
                >
                  {section.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {section.links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#64b5f6',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 4 }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © 2025 TechCorp. All rights reserved. Built with passion and cutting-edge technology.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.url}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      color: '#64b5f6',
                      backgroundColor: 'rgba(100, 181, 246, 0.2)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(100, 181, 246, 0.3)',
                    },
                  }}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Additional Footer Info */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.6, mb: 2 }}>
            Trusted by 500+ companies worldwide • 99.9% uptime guarantee • 24/7 support
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map(
              (link) => (
                <Link
                  key={link}
                  href="#"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    '&:hover': {
                      color: '#64b5f6',
                    },
                  }}
                >
                  {link}
                </Link>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;