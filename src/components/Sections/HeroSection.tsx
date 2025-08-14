import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
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
        ease: 'easeOut',
      },
    },
  };

  const services = [
    {
      icon: <Cloud sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern enterprises',
      metrics: '99.9% Uptime',
    },
    {
      icon: <Security sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Cybersecurity',
      description: 'Advanced security protocols and monitoring',
      metrics: 'Zero Breaches',
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: 'success.main' }} />,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications and systems',
      metrics: '3x Faster',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: 'warning.main' }} />,
      title: 'Digital Growth',
      description: 'Strategic technology consulting',
      metrics: '250% ROI',
    },
  ];

  return (
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
                  label="🚀 #1 IT Solutions Provider"
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
                  Transform Your
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
                    Digital Future
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
                  We deliver cutting-edge IT solutions that drive innovation, enhance security,
                  and accelerate your business growth in the digital age. Transform your technology
                  infrastructure with our expert team.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate('/contact')}
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
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    onClick={() => navigate('/about')}
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
                    Watch Demo
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Grid container spacing={2}>
                  {services.map((service, index) => (
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
                            <Box sx={{ mb: 2 }}>{service.icon}</Box>
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
  );
};

export default HeroSection;