'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
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
  PlayArrow,
  TrendingUp,
  Security,
  Speed,
  Cloud,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { homeLabels } from '../../labels/index';
import { useTheme as useMuiTheme } from '@mui/material/styles';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const muiTheme = useMuiTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const serviceIcons = [
    <Cloud sx={{ fontSize: 40, color: '#64b5f6' }} />,
    <Security sx={{ fontSize: 40, color: '#f48fb1' }} />,
    <Speed sx={{ fontSize: 40, color: '#81c784' }} />,
    <TrendingUp sx={{ fontSize: 40, color: '#ffb74d' }} />,
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
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: (theme) =>
          theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
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
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'radial-gradient(circle at 20% 80%, #64b5f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f48fb1 0%, transparent 50%)'
                : 'radial-gradient(circle at 20% 80%, #64b5f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f48fb1 0%, transparent 50%)',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {/* Main Hero Section - Two Column Layout */}
            <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
              {/* Left Column - Hero Text */}
              <Grid item xs={12} lg={6}>
                <motion.div variants={itemVariants}>
                  <Box textAlign={{ xs: 'center', lg: 'left' }}>
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
                          background: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'rgba(100, 181, 246, 0.2)'
                              : 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          border: (theme) =>
                            theme.palette.mode === 'dark'
                              ? '1px solid rgba(100, 181, 246, 0.3)'
                              : '1px solid rgba(255, 255, 255, 0.3)',
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
                          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
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
                          maxWidth: 600,
                          mx: { xs: 'auto', lg: 0 },
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
                      <Box 
                        sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' }, flexWrap: 'wrap' }}
                      >
                        <Button
                          variant="contained"
                          size="large"
                          onClick={handleGetStarted}
                          sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #1565c0, #1e88e5)',
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
                            borderColor: (theme) =>
                              theme.palette.mode === 'dark'
                                ? 'rgba(100, 181, 246, 0.3)'
                                : 'rgba(255, 255, 255, 0.3)',
                            background: (theme) =>
                              theme.palette.mode === 'dark'
                                ? 'rgba(100, 181, 246, 0.1)'
                                : 'rgba(255, 255, 255, 0.1)',
                            '&:hover': {
                              borderColor: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? 'rgba(100, 181, 246, 0.5)'
                                  : 'rgba(255, 255, 255, 0.5)',
                              background: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? 'rgba(100, 181, 246, 0.2)'
                                  : 'rgba(255, 255, 255, 0.2)',
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
              </Grid>

              {/* Right Column - Services Preview (2x2 Grid) */}
              <Grid item xs={12} lg={6}>
                <motion.div variants={itemVariants}>
                  <Grid container spacing={3}>
                    {homeLabels.services.map((service, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <motion.div
                          whileHover={{ y: -10, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          <Card
                            sx={{
                              height: 280,
                              background: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? 'rgba(255, 255, 255, 0.05)'
                                  : 'rgba(255, 255, 255, 0.1)',
                              backdropFilter: 'blur(20px)',
                              border: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? '1px solid rgba(255, 255, 255, 0.1)'
                                  : '1px solid rgba(255, 255, 255, 0.2)',
                              color: 'white',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              position: 'relative',
                              overflow: 'hidden',
                              '&:hover': {
                                background: (theme) =>
                                  theme.palette.mode === 'dark'
                                    ? 'rgba(255, 255, 255, 0.08)'
                                    : 'rgba(255, 255, 255, 0.15)',
                                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                                transform: 'translateY(-8px)',
                              },
                            }}
                          >
                            {/* Background Image */}
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 1,
                              }}
                            >
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                style={{ 
                                  objectFit: 'cover',
                                }}
                                priority={index < 2}
                              />
                            </Box>
                            
                            {/* Gradient Overlay */}
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: (theme) =>
                                  theme.palette.mode === 'dark'
                                    ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))'
                                    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
                                zIndex: 2,
                              }}
                            />
                            
                            <CardContent sx={{ 
                              p: 3,
                              position: 'relative',
                              zIndex: 3,
                              textAlign: 'center', 
                              height: '100%', 
                              display: 'flex', 
                              flexDirection: 'column', 
                              justifyContent: 'space-between',
                              minHeight: 280
                            }}>
                              <Box>
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                  <Box sx={{ 
                                    mb: 2,
                                    '& svg': {
                                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                                    }
                                  }}>{serviceIcons[index]}</Box>
                                </motion.div>
                                <Typography variant="h6" sx={{ 
                                  mb: 1, 
                                  fontWeight: 700, 
                                  fontSize: '1.2rem', 
                                  minHeight: '1.5em',
                                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                }}>
                                  {service.title}
                                </Typography>
                                <Typography variant="body2" sx={{ 
                                  mb: 2, 
                                  opacity: 0.95, 
                                  fontSize: '0.9rem', 
                                  minHeight: '3em', 
                                  lineHeight: 1.5,
                                  textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                                  fontWeight: 500,
                                }}>
                                  {service.description}
                                </Typography>
                              </Box>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Chip
                                  label={service.metrics}
                                  size="small"
                                  sx={{
                                    background: 'transparent',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    mt: 'auto',
                                    border: '2px solid rgba(255, 255, 255, 0.8)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                  }}
                                />
                              </motion.div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Grid>
            </Grid>

            {/* Expanded Content Section */}
            {homeLabels.expandedContent && (
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    mt: 8,
                    p: { xs: 4, md: 6 },
                    borderRadius: 4,
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    border: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : '1px solid rgba(255, 255, 255, 0.2)',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
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
                        <motion.div
                          whileHover={{ 
                            y: -8, 
                            scale: 1.02,
                            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)' 
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card
                            sx={{
                              background: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? 'rgba(255, 255, 255, 0.05)'
                                  : 'rgba(255, 255, 255, 0.1)',
                              backdropFilter: 'blur(20px)',
                              border: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? '1px solid rgba(255, 255, 255, 0.08)'
                                  : '1px solid rgba(255, 255, 255, 0.2)',
                              color: 'white',
                              height: '100%',
                              p: 0,
                              overflow: 'hidden',
                              position: 'relative',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                '& .section-image': {
                                 transform: 'scale(1)',
                                },
                              },
                            }}
                          >
                            {/* Background Image */}
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '200px',
                                zIndex: 1,
                              }}
                            >
                              <Image
                                src={section.image}
                                alt={section.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                style={{ 
                                  objectFit: 'cover',
                                }}
                                className="section-image"
                              />
                            </Box>
                            
                            {/* Gradient Overlay */}
                            <Box
                              className="section-overlay"
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '200px',
                                background: (theme) =>
                                  theme.palette.mode === 'dark'
                                    ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))'
                                    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
                                zIndex: 2,
                                transition: 'background 0.3s ease',
                              }}
                            />
                            
                            <CardContent sx={{ 
                              p: 3,
                              position: 'relative',
                              zIndex: 3,
                              pt: '220px', // Space for image
                              minHeight: '500px',
                            }}>
                              <Typography variant="h5" sx={{ 
                                mb: 2, 
                                fontWeight: 600,
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                              }}>
                                {section.title}
                              </Typography>
                              <Typography variant="body1" sx={{ 
                                mb: 2, 
                                lineHeight: 1.7,
                                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                              }}>
                                {section.description}
                              </Typography>
                              <Typography
                                variant="body2"
                          sx={{
                                  opacity: 0.9,
                                  fontStyle: 'italic',
                                  pl: 2,
                                  borderLeft: (theme) =>
                                    theme.palette.mode === 'dark'
                                      ? '3px solid rgba(100, 181, 246, 0.5)'
                                      : '3px solid rgba(255, 255, 255, 0.3)',
                                  textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                          }}
                              >
                                {section.note}
                              </Typography>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Insights Section */}
                  {homeLabels.expandedContent.insights && (
                    <Box sx={{ mt: 6 }}>
                      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                        {homeLabels.expandedContent.insights.title}
                      </Typography>
                      
                      {/* Image Block - Between Title and Description */}
                      {homeLabels.expandedContent.insights.image && (
                        <Box
                          sx={{
                            position: 'relative',
                            width: '100%',
                            height: 300,
                            mb: 4,
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                          }}
                        >
                          <Image
                            src={homeLabels.expandedContent.insights.image}
                            alt="Data Analytics Dashboard"
                            fill
                            sizes="(max-width: 768px) 100vw, 1200px"
                            style={{ objectFit: 'cover' }}
                            priority
                          />
                          {/* Gradient Overlay */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))'
                                  : 'linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))',
                              zIndex: 2,
                            }}
                          />
                        </Box>
                      )}
                      
                      <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                        {homeLabels.expandedContent.insights.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                        {homeLabels.expandedContent.insights.features.map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature.label}
                            sx={{
                              background: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? `${feature.color}CC` // Add transparency in dark mode
                                  : feature.color,
                              color: 'white',
                              fontWeight: 600,
                              px: 2,
                              py: 1,
                              border: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? `1px solid ${feature.color}66`
                                  : 'none',
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
      
      {/* Technology Marquee Section */}
      <Box
        sx={{
          mt: 8,
          py: 8,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 4,
          border: (theme) =>
            theme.palette.mode === 'dark'
              ? '2px solid rgba(100, 181, 246, 0.3)'
              : '2px solid rgba(255, 255, 255, 0.3)',
          boxShadow: (theme) =>
            theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          position: 'relative',
          mx: 2,
        }}
      >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              sx={{
                mb: 4,
                fontWeight: 600,
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {homeLabels.techMarquee.title}
            </Typography>
          </motion.div>

          {/* Technologies Grid */}
          <Box
            sx={{
              position: 'relative',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '80px',
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(to right, #1a1a2e, transparent)'
                    : 'linear-gradient(to right, #667eea, transparent)',
                zIndex: 2,
                pointerEvents: 'none',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '40px',
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(to left, #1a1a2e, rgba(26, 26, 46, 0.8), transparent)'
                    : 'linear-gradient(to left, #667eea, rgba(102, 126, 234, 0.8), transparent)',
                zIndex: 2,
                pointerEvents: 'none',
              },
            }}
          >
            {/* Scrolling Content */}
            <motion.div
              animate={{
                x: [0, -50 * homeLabels.techMarquee.technologies.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
                whiteSpace: 'nowrap',
              }}
            >
              {/* Duplicate array for seamless loop */}
              {[...homeLabels.techMarquee.technologies, ...homeLabels.techMarquee.technologies].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    minWidth: '100px',
                    cursor: 'pointer',
                  }}
                >
                  {/* Tech Logo */}
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '16px',
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1))'
                          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
                      border: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '1px solid rgba(255, 255, 255, 0.2)'
                          : '1px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        background: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, rgba(100, 181, 246, 0.25), rgba(244, 143, 177, 0.25))'
                            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2))',
                        borderColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(100, 181, 246, 0.3)'
                            : 'rgba(25, 118, 210, 0.3)',
                        boxShadow: (theme) =>
                          theme.palette.mode === 'dark'
                            ? '0 6px 20px rgba(100, 181, 246, 0.15)'
                            : '0 6px 20px rgba(25, 118, 210, 0.1)',
                      },
                    }}
                  >
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={40}
                      height={40}
                      style={{
                        objectFit: 'contain',
                        filter: muiTheme.palette.mode === 'dark' ? 'brightness(1.2)' : 'none',
                      }}
                    />
                  </Box>

                  {/* Tech Name */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.9)'
                          : 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: (theme) =>
                          theme.palette.mode === 'dark'
                            ? '#ffffff'
                            : '#ffffff',
                      },
                    }}
                  >
                    {tech.name}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>
          </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;