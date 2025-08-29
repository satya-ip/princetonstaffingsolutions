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
} from '@mui/material';
import {
  Cloud,
  Security,
  Speed,
  TrendingUp,
  ArrowForward,
  PlayArrow,
  Psychology,
  Support,
  Shield,
  Analytics,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { homeLabels } from '../../labels';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticleCount((prev) => (prev + 1) % 50);
    }, 100);
    return () => clearInterval(interval);
  }, []);

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // ease removed for TS compatibility with Variants typing
      },
    },
  };

  const serviceIcons = [
    <Cloud sx={{ fontSize: 40, color: 'primary.main' }} />,
    <Security sx={{ fontSize: 40, color: 'secondary.main' }} />,
    <Speed sx={{ fontSize: 40, color: 'success.main' }} />,
    <TrendingUp sx={{ fontSize: 40, color: 'warning.main' }} />,
  ];

  return (
    <>
      <Box
        id="home"
        ref={ref}
        sx={{
          minHeight: '100vh',
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          pt: 8,
        }}
      >
      {/* Animated Background Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Chip
                  label={homeLabels.hero.badge}
                  sx={{
                    mb: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    mb: 3,
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {homeLabels.hero.title}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'block',
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
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {homeLabels.hero.subtitle}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => router.push('/contact')}
                    sx={{
                      background: 'linear-gradient(45deg, #1976d2, #dc004e)',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1565c0, #9a0036)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 30px rgba(25, 118, 210, 0.3)',
                      },
                    }}
                  >
                    {homeLabels.hero.buttons.primary}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    onClick={() => router.push('/about')}
                    sx={{
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {homeLabels.hero.buttons.secondary}
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Grid container spacing={2}>
                  {homeLabels.services.map((service, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card
                          sx={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            height: '280px',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.15)',
                              transform: 'translateY(-5px)',
                              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                            },
                          }}
                        >
                          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Box sx={{ mb: 2 }}>{serviceIcons[index]}</Box>
                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                              {service.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ mb: 2, opacity: 0.8, lineHeight: 1.5, flexGrow: 1 }}
                            >
                              {service.description}
                            </Typography>
                            <Chip
                              label={service.metrics}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(100, 181, 246, 0.2)',
                                color: '#64b5f6',
                                fontWeight: 600,
                                alignSelf: 'flex-start',
                                mt: 'auto',
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
        </motion.div>
      </Container>
    </Box>

    {/* Expanded Hero Content Section */}
    <Box
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Main Description */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                mb: 4,
                textAlign: 'center',
                fontWeight: 600,
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                lineHeight: 1.3,
              }}
            >
              {homeLabels.expandedContent.mainTitle}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                mb: 6,
                textAlign: 'center',
                fontWeight: 400,
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              {homeLabels.expandedContent.subtitle}
            </Typography>
          </motion.div>

          {/* Service Categories */}
          <Grid container spacing={4}>
            {homeLabels.expandedContent.sections.map((section, index) => {
              const sectionIcons = [
                <Psychology sx={{ fontSize: 40, color: '#64b5f6', mr: 2 }} />,
                <Cloud sx={{ fontSize: 40, color: '#4caf50', mr: 2 }} />,
                <Support sx={{ fontSize: 40, color: '#ff9800', mr: 2 }} />,
                <Shield sx={{ fontSize: 40, color: '#f44336', mr: 2 }} />,
              ];
              
              return (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.15)',
                          transform: 'translateY(-5px)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          {sectionIcons[index]}
                          <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {section.title}
                          </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, opacity: 0.9 }}>
                          {section.description}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, fontStyle: 'italic' }}>
                          {section.note}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>

          {/* Visual Elements Section */}
          <Box sx={{ mt: 8 }}>
            <motion.div variants={itemVariants}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', height: 400, borderRadius: 3, overflow: 'hidden' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.2), rgba(244, 143, 177, 0.2))',
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <Analytics sx={{ fontSize: 120, color: 'rgba(255, 255, 255, 0.3)' }} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'white',
                    mb: 3,
                    fontWeight: 600,
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                  }}
                >
                  {homeLabels.expandedContent.insights.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 3,
                    lineHeight: 1.7,
                    fontSize: '1.1rem',
                  }}
                >
                  {homeLabels.expandedContent.insights.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {homeLabels.expandedContent.insights.features.map((item, index) => (
                    <Chip
                      key={index}
                      label={item.label}
                      sx={{
                        bgcolor: `${item.color}20`,
                        color: item.color,
                        border: `1px solid ${item.color}40`,
                        fontWeight: 500,
                      }}
                    />
                  ))}
                                 </Box>
               </Grid>
             </Grid>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
    </>
  );
};

export default HeroSection;