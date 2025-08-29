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
  LinearProgress,
} from '@mui/material';
import {
  PlayArrow,
  TrendingUp,
  Security,
  Speed,
  Cloud,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { homeLabels } from '../../labels';

const CounterAnimation: React.FC<{ end: number; duration: number }> = ({ end, duration }) => {
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const HeroSection: React.FC = () => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const serviceIcons = [
    <Cloud sx={{ fontSize: 40, color: 'primary.main' }} />,
    <Security sx={{ fontSize: 40, color: 'secondary.main' }} />,
    <Speed sx={{ fontSize: 40, color: 'success.main' }} />,
    <TrendingUp sx={{ fontSize: 40, color: 'warning.main' }} />,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
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

  const handleGetStarted = () => {
    router.push('/contact');
  };

  const handleWatchDemo = () => {
    // Scroll to services section or implement demo functionality
    const servicesSection = document.getElementById('services-preview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        pt: 10,
        pb: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'radial-gradient(circle at 20% 80%, #64b5f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f48fb1 0%, transparent 50%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Hero Content */}
          <motion.div variants={itemVariants}>
            <Box textAlign="center" sx={{ mb: 8 }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Chip
                  label={homeLabels.hero.badge}
                  sx={{
                    mb: 3,
                    px: 2,
                    py: 1,
                    fontSize: '1rem',
                    fontWeight: 600,
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
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

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    maxWidth: 800,
                    mx: 'auto',
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  }}
                >
                  {homeLabels.hero.subtitle}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                    startIcon={<PlayArrow />}
                    onClick={handleWatchDemo}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
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
            </Box>
          </motion.div>

          {/* Services Preview */}
          <motion.div variants={itemVariants} id="services-preview">
            <Grid container spacing={3} sx={{ mb: 8 }}>
              {homeLabels.services.map((service, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.15)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                      onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                    >
                      <CardContent sx={{ p: 3, textAlign: 'center' }}>
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
                            background: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
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

          {/* Expanded Content Section */}
          {homeLabels.expandedContent && (
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  mt: 8,
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: { xs: '1.75rem', sm: '2.125rem' },
                  }}
                >
                  {homeLabels.expandedContent.mainTitle}
                </Typography>
                
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    textAlign: 'center',
                    maxWidth: 800,
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  {homeLabels.expandedContent.subtitle}
                </Typography>

                <Grid container spacing={4}>
                  {homeLabels.expandedContent.sections.map((section, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                          {section.title}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                          {section.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            opacity: 0.8,
                            fontStyle: 'italic',
                            pl: 2,
                            borderLeft: '3px solid rgba(255, 255, 255, 0.3)',
                          }}
                        >
                          {section.note}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* Insights Section */}
                {homeLabels.expandedContent.insights && (
                  <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                      {homeLabels.expandedContent.insights.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                      {homeLabels.expandedContent.insights.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                      {homeLabels.expandedContent.insights.features.map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature.label}
                          sx={{
                            background: feature.color,
                            color: 'white',
                            fontWeight: 600,
                            px: 2,
                            py: 1,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;