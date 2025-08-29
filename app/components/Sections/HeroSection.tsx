'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
} from '@mui/material';
import {
  PlayArrow,
  TrendingUp,
  Security,
  Speed,
  Business,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { homeLabels } from '../../labels';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [expandedContent, setExpandedContent] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleGetStarted = () => {
    router.push('/contact');
  };

  const handleWatchDemo = () => {
    // Demo functionality can be implemented later
    console.log('Watch demo clicked');
  };

  const toggleExpandedContent = () => {
    setExpandedContent(!expandedContent);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const serviceIcons = [
    <Business sx={{ fontSize: 40, color: 'primary.main' }} />,
    <Security sx={{ fontSize: 40, color: 'secondary.main' }} />,
    <Speed sx={{ fontSize: 40, color: 'success.main' }} />,
    <TrendingUp sx={{ fontSize: 40, color: 'warning.main' }} />,
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <Chip
                  label={homeLabels.hero.badge}
                  sx={{
                    mb: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    px: 2,
                    py: 1,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    lineHeight: 1.1,
                  }}
                >
                  {homeLabels.hero.title}{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {homeLabels.hero.titleHighlight}
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    maxWidth: '600px',
                  }}
                >
                  {homeLabels.hero.subtitle}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleGetStarted}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.3)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    {homeLabels.hero.buttons.primary}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleWatchDemo}
                    startIcon={<PlayArrow />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {homeLabels.hero.buttons.secondary}
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <Grid container spacing={3}>
                  {homeLabels.services.map((service, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card
                          sx={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            p: 2,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.15)',
                              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                            },
                          }}
                        >
                          <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                            <Box sx={{ mb: 2 }}>{serviceIcons[index]}</Box>
                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                              {service.title}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                              {service.description}
                            </Typography>
                            <Chip
                              label={service.metrics}
                              size="small"
                              sx={{
                                background: 'rgba(100, 181, 246, 0.2)',
                                color: '#64b5f6',
                                fontWeight: 600,
                              }}
                            />
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>
          </Grid>

          {/* Expand Content Button */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <IconButton
                onClick={toggleExpandedContent}
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <motion.div
                  animate={{ rotate: expandedContent ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <KeyboardArrowDown />
                </motion.div>
              </IconButton>
            </Box>
          </motion.div>

          {/* Expanded Content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: expandedContent ? 'auto' : 0,
              opacity: expandedContent ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            style={{ overflow: 'hidden' }}
          >
            <Box sx={{ mt: 6, pt: 6, borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                    {homeLabels.expandedContent.mainTitle}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.7 }}>
                    {homeLabels.expandedContent.subtitle}
                  </Typography>

                  {homeLabels.expandedContent.sections.map((section, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        {section.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1, opacity: 0.9, lineHeight: 1.6 }}>
                        {section.description}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.7, fontStyle: 'italic' }}>
                        {section.note}
                      </Typography>
                    </Box>
                  ))}
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 3,
                      p: 3,
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                      {homeLabels.expandedContent.insights.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6 }}>
                      {homeLabels.expandedContent.insights.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {homeLabels.expandedContent.insights.features.map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature.label}
                          sx={{
                            backgroundColor: feature.color + '20',
                            color: feature.color,
                            fontWeight: 500,
                            justifyContent: 'flex-start',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;