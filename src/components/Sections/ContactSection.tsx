import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Snackbar,
  Alert,
  Chip,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  CheckCircle,
  Business,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  company: yup.string().required('Company is required'),
  service: yup.string().required('Please select a service'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setSubmitStatus('success');
    setSnackbarOpen(true);
    reset();
    
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email Us',
      value: 'hello@techcorp.com',
      subtitle: 'We reply within 24 hours',
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'success.main' }} />,
      title: 'Visit Us',
      value: '123 Tech Street, Innovation District',
      subtitle: 'San Francisco, CA 94105',
    },
  ];

  const services = [
    'Cloud Infrastructure',
    'Cybersecurity Services',
    'Custom Development',
    'Data Analytics & AI',
    'Performance Optimization',
    '24/7 Technical Support',
    'Digital Transformation',
    'Other',
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
      id="contact"
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
                Get In Touch
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
              >
                Ready to transform your business? Let's discuss how we can help
                you achieve your goals.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={6}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                  Contact Information
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        sx={{
                          mb: 3,
                          p: 3,
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
                          '&:hover': {
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Box sx={{ mt: 0.5 }}>{info.icon}</Box>
                          <Box>
                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                              {info.title}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 0.5, fontWeight: 500 }}>
                              {info.value}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {info.subtitle}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </motion.div>
                  ))}
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Why Choose TechCorp?
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {[
                      '15+ Years Experience',
                      '500+ Satisfied Clients',
                      '24/7 Support',
                      '99.9% Uptime Guarantee',
                    ].map((feature) => (
                      <Chip
                        key={feature}
                        icon={<CheckCircle sx={{ fontSize: 16 }} />}
                        label={feature}
                        variant="outlined"
                        sx={{ justifyContent: 'flex-start', fontWeight: 500 }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    p: 4,
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
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                    Send us a message
                  </Typography>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="firstName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="First Name"
                              error={!!errors.firstName}
                              helperText={errors.firstName?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                  },
                                },
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="lastName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Last Name"
                              error={!!errors.lastName}
                              helperText={errors.lastName?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                  },
                                },
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Email"
                              type="email"
                              error={!!errors.email}
                              helperText={errors.email?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                  },
                                },
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Phone"
                              error={!!errors.phone}
                              helperText={errors.phone?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                  },
                                },
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="company"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Company"
                              error={!!errors.company}
                              helperText={errors.company?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                  },
                                },
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="service"
                          control={control}
                          render={({ field }) => (
                            <FormControl
                              fullWidth
                              error={!!errors.service}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                  },
                                },
                              }}
                            >
                              <InputLabel>Service Interested In</InputLabel>
                              <Select {...field} label="Service Interested In">
                                {services.map((service) => (
                                  <MenuItem key={service} value={service}>
                                    {service}
                                  </MenuItem>
                                ))}
                              </Select>
                              <FormHelperText>{errors.service?.message}</FormHelperText>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          name="message"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Message"
                              multiline
                              rows={4}
                              error={!!errors.message}
                              helperText={errors.message?.message}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                  },
                                },
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={!isValid || submitStatus === 'loading'}
                            endIcon={
                              submitStatus === 'success' ? <CheckCircle /> : <Send />
                            }
                            sx={{
                              px: 4,
                              py: 1.5,
                              fontSize: '1.1rem',
                              background:
                                submitStatus === 'success'
                                  ? 'linear-gradient(45deg, #4caf50, #81c784)'
                                  : 'linear-gradient(45deg, #1976d2, #dc004e)',
                              '&:hover': {
                                background:
                                  submitStatus === 'success'
                                    ? 'linear-gradient(45deg, #388e3c, #66bb6a)'
                                    : 'linear-gradient(45deg, #1565c0, #9a0036)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 10px 30px rgba(25, 118, 210, 0.3)',
                              },
                              '&:disabled': {
                                background: 'rgba(0, 0, 0, 0.12)',
                              },
                            }}
                          >
                            {submitStatus === 'loading'
                              ? 'Sending...'
                              : submitStatus === 'success'
                              ? 'Message Sent!'
                              : 'Send Message'}
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </form>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ borderRadius: 2 }}
        >
          Thank you for your message! We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;