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
import Image from 'next/image';

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
                    Get Started
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
              Our expert team empowers enterprises with next-generation IT solutions—leveraging AI-driven cloud infrastructure, advanced cybersecurity, and performance optimization—to drive innovation and business growth.
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
              In today&apos;s fast-paced digital landscape, companies must stay competitive and agile. TechCorp delivers cutting-edge technology and 24/7 support to keep your operations scalable, secure, and ahead of the curve.
            </Typography>
          </motion.div>

          {/* Service Categories */}
          <Grid container spacing={4}>
            {/* AI-Powered Innovation */}
            <Grid item xs={12} md={6}>
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
                      <Psychology sx={{ fontSize: 40, color: '#64b5f6', mr: 2 }} />
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        AI-Powered Innovation
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, opacity: 0.9 }}>
                      We integrate artificial intelligence and automation to boost efficiency and productivity. Gartner reports AI automation can cut operational costs by up to 30% by 2025, and organizations using AI-driven solutions often see up to 40% higher productivity.
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, fontStyle: 'italic' }}>
                      TechCorp&apos;s AI agents handle routine tasks and data analysis, enabling your team to focus on strategic initiatives and innovation.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Scalable Cloud Architecture */}
            <Grid item xs={12} md={6}>
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
                      <Cloud sx={{ fontSize: 40, color: '#4caf50', mr: 2 }} />
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Scalable Cloud Architecture
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, opacity: 0.9 }}>
                      Our cloud solutions provide on-demand computing resources that grow with your business. Cloud platforms offer unprecedented scalability, flexibility and cost-effectiveness, eliminating the need for expensive hardware management.
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, fontStyle: 'italic' }}>
                      TechCorp builds multi-cloud and hybrid architectures so you pay only for what you use and can adapt instantly to changing needs.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* 24/7 Proactive Support */}
            <Grid item xs={12} md={6}>
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
                      <Support sx={{ fontSize: 40, color: '#ff9800', mr: 2 }} />
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        24/7 Proactive Support
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, opacity: 0.9 }}>
                      We offer round-the-clock monitoring and managed services to maximize uptime. Continuous oversight and automated alerts ensure potential issues are detected early, minimizing downtime and disruptions.
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, fontStyle: 'italic' }}>
                      Whether it&apos;s a security alert or a network hiccup, our team is ready at any hour to resolve issues quickly, protecting your revenue and reputation.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Comprehensive Security & Compliance */}
            <Grid item xs={12} md={6}>
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
                      <Shield sx={{ fontSize: 40, color: '#f44336', mr: 2 }} />
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Comprehensive Security & Compliance
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, opacity: 0.9 }}>
                      TechCorp embeds security into every solution. We use advanced threat detection and regular security updates to protect against cyberattacks and data breaches.
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, fontStyle: 'italic' }}>
                      With TechCorp, you gain standard industry-compliant cybersecurity and constant vigilance so your business stays safe and trusted.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
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
                  Data-Driven Insights & Growth
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
                  Our advanced analytics and monitoring systems provide real-time insights into your infrastructure performance, security posture, and business metrics.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {[
                    { label: 'Real-time Monitoring', color: '#4caf50' },
                    { label: 'Predictive Analytics', color: '#2196f3' },
                    { label: 'Performance Metrics', color: '#ff9800' },
                  ].map((item, index) => (
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