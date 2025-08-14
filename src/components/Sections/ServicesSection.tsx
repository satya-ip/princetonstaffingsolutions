import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  Cloud,
  Security,
  Code,
  Analytics,
  Support,
  Speed,
  CheckCircle,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CounterAnimation: React.FC<{ end: number; duration?: number }> = ({ 
  end, 
  duration = 2 
}) => {
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
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

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const services = [
    {
      icon: <Cloud sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Cloud Infrastructure',
      description: 'Transform your IT infrastructure with our comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud migration and management services that grow with your business.',
      features: ['AWS/Azure/GCP Migration', 'Auto-scaling Solutions', 'Disaster Recovery', 'Cost Optimization'],
      price: 'Starting at $2,500/month',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      benefits: ['99.9% Uptime SLA', '24/7 Monitoring', 'Expert Support', 'Scalable Architecture'],
    },
    {
      icon: <Security sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Cybersecurity Services',
      description: 'Protect your business with enterprise-grade cybersecurity solutions. Our comprehensive security services safeguard your digital assets and ensure regulatory compliance.',
      features: ['Security Audits', '24/7 Monitoring', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $1,800/month',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      benefits: ['Zero Breach Guarantee', 'SOC 2 Compliance', 'Real-time Threat Detection', 'Expert Security Team'],
    },
    {
      icon: <Code sx={{ fontSize: 50, color: 'success.main' }} />,
      title: 'Custom Development',
      description: 'Build powerful, scalable applications tailored to your unique business requirements. Our expert developers use cutting-edge technologies and industry best practices.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy Modernization'],
      price: 'Starting at $15,000/project',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      benefits: ['Agile Development', 'Modern Tech Stack', 'Quality Assurance', 'Ongoing Support'],
    },
    {
      icon: <Analytics sx={{ fontSize: 50, color: 'warning.main' }} />,
      title: 'Data Analytics & AI',
      description: 'Unlock the power of your data with advanced analytics and artificial intelligence. Turn raw data into actionable insights that drive business growth and competitive advantage.',
      features: ['Business Intelligence', 'Predictive Analytics', 'Machine Learning', 'Data Visualization'],
      price: 'Starting at $3,500/month',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      benefits: ['Real-time Insights', 'Predictive Models', 'Custom Dashboards', 'Data-driven Decisions'],
    },
    {
      icon: <Speed sx={{ fontSize: 50, color: 'info.main' }} />,
      title: 'Performance Optimization',
      description: 'Maximize your system performance and user experience. Our optimization services ensure your applications run at peak efficiency with lightning-fast response times.',
      features: ['Performance Audits', 'Database Optimization', 'CDN Implementation', 'Load Balancing'],
      price: 'Starting at $2,000/month',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      benefits: ['3x Faster Load Times', 'Improved User Experience', 'Cost Reduction', 'Scalable Performance'],
    },
    {
      icon: <Support sx={{ fontSize: 50, color: 'error.main' }} />,
      title: '24/7 Technical Support',
      description: 'Never worry about downtime again. Our dedicated support team provides round-the-clock monitoring, maintenance, and emergency response to keep your systems running smoothly.',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Emergency Response', 'Remote Support'],
      price: 'Starting at $1,200/month',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      benefits: ['Instant Response', 'Expert Technicians', 'Proactive Monitoring', 'Peace of Mind'],
    },
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <Box
      id="services"
      ref={ref}
      sx={{
        py: 10,
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)'
            : 'linear-gradient(180deg, #e2e8f0 0%, #f8fafc 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Box textAlign="center" sx={{ mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  background: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(45deg, #64b5f6, #f48fb1)'
                      : 'linear-gradient(45deg, #1976d2, #dc004e)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Our Services
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
              >
                Comprehensive IT solutions designed to accelerate your digital
                transformation and drive business growth.
              </Typography>
            </Box>
          </motion.div>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(20px)',
                      border: (theme) =>
                        `1px solid ${
                          theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.1)'
                        }`,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                        '&::before': {
                          opacity: 0.1,
                        },
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: service.gradient,
                        opacity: 0.8,
                        transition: 'opacity 0.3s ease',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ mb: 3 }}>{service.icon}</Box>
                      
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        {service.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.7, flexGrow: 1, fontSize: '0.95rem' }}
                      >
                        {service.description}
                      </Typography>

                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}>
                          Key Features:
                        </Typography>
                        <List sx={{ p: 0 }}>
                          {service.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ px: 0, py: 0.25 }}>
                              <ListItemIcon sx={{ minWidth: 20 }}>
                                <CheckCircle sx={{ fontSize: 14, color: 'primary.main' }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={feature}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                  color: 'text.secondary',
                                  fontSize: '0.85rem',
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'secondary.main' }}>
                          Benefits:
                        </Typography>
                        <List sx={{ p: 0 }}>
                          {service.benefits.map((benefit, idx) => (
                            <ListItem key={idx} sx={{ px: 0, py: 0.25 }}>
                              <ListItemIcon sx={{ minWidth: 20 }}>
                                <CheckCircle sx={{ fontSize: 14, color: 'secondary.main' }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={benefit}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                  color: 'text.secondary',
                                  fontSize: '0.85rem',
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>

                      <Chip
                        label={service.price}
                        sx={{
                          background: service.gradient,
                          color: 'white',
                          fontWeight: 600,
                          alignSelf: 'flex-start',
                          fontSize: '0.8rem',
                          height: 28,
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Additional Services Info */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mt: 6, mb: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Box textAlign="center" sx={{ p: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      <CounterAnimation end={500} duration={2.5} />+
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Projects Completed
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Successfully delivered across various industries
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box textAlign="center" sx={{ p: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'secondary.main', mb: 1 }}>
                      <CounterAnimation end={99.9} duration={2.5} />%
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Uptime Guarantee
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Reliable infrastructure and monitoring
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box textAlign="center" sx={{ p: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main', mb: 1 }}>
                      24/7
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Expert Support
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Always available when you need us
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>

          {/* Service Process */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mt: 8, mb: 6 }}>
              <Typography variant="h4" textAlign="center" sx={{ mb: 6, fontWeight: 600 }}>
                Our Service Process
              </Typography>
              <Grid container spacing={4}>
                {[
                  { step: '01', title: 'Discovery & Analysis', description: 'We analyze your current infrastructure and business requirements' },
                  { step: '02', title: 'Strategy & Planning', description: 'Develop a comprehensive roadmap tailored to your goals' },
                  { step: '03', title: 'Implementation', description: 'Execute the plan with minimal disruption to your operations' },
                  { step: '04', title: 'Monitoring & Support', description: 'Ongoing monitoring and support to ensure optimal performance' },
                ].map((process, idx) => (
                  <Grid item xs={12} sm={6} md={3} key={idx}>
                    <Box textAlign="center" sx={{ p: 2 }}>
                      <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 2, opacity: 0.7 }}>
                        {process.step}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {process.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {process.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                mt: 8,
                p: 6,
                borderRadius: 4,
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                Ready to Transform Your Business?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Let's discuss how our services can help you achieve your goals.
              </Typography>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => {
                  navigate('/contact');
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = 'rgba(255, 255, 255, 0.3)';
                  (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = 'rgba(255, 255, 255, 0.2)';
                  (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Get Free Consultation
              </motion.button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesSection;