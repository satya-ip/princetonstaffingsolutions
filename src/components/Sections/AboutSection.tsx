import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  People,
  EmojiEvents,
  Business,
  Timeline,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
// Temporarily comment out ScrollDrivenApproach to isolate the issue
// import ScrollDrivenApproach from './ScrollDrivenApproach';

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

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Initialize animation on mount
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const stats = [
    { icon: <People />, value: 500, suffix: '+', label: 'Happy Clients' },
    { icon: <EmojiEvents />, value: 1000, suffix: '+', label: 'Projects Completed' },
    { icon: <Business />, value: 15, suffix: '+', label: 'Years Experience' },
    { icon: <Timeline />, value: 99.9, suffix: '%', label: 'Success Rate' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['Cloud Architecture', 'DevOps', 'AI/ML'],
    },
    {
      name: 'Michael Chen',
      role: 'Lead Security Engineer',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['Cybersecurity', 'Penetration Testing', 'Compliance'],
    },
    {
      name: 'Emma Rodriguez',
      role: 'Senior Full Stack Developer',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['React', 'Node.js', 'Mobile Development'],
    },
    {
      name: 'David Kim',
      role: 'Data Science Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['Big Data', 'Analytics', 'Machine Learning'],
    },
  ];

  const skills = [
    { name: 'Cloud Computing', level: 95 },
    { name: 'Cybersecurity', level: 92 },
    { name: 'AI & Machine Learning', level: 88 },
    { name: 'Mobile Development', level: 90 },
    { name: 'DevOps & Automation', level: 94 },
    { name: 'Data Analytics', level: 87 },
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
      id="about"
      ref={ref}
      sx={{
        py: 10,
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)'
            : 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
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
                About TechCorp
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
              >
                We are a team of passionate technologists dedicated to transforming
                businesses through innovative IT solutions.
              </Typography>
            </Box>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <Grid container spacing={3} sx={{ mb: 8 }}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        background: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: (theme) =>
                          `1px solid ${
                            theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.1)'
                          }`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: 'primary.main',
                          mb: 2,
                          '& svg': { fontSize: 40 },
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, minHeight: '1.2em' }}>
                        <CounterAnimation end={stat.value} duration={2.5} />
                        {stat.suffix}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants}>
            <Grid container spacing={6} sx={{ mb: 8 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                  Our Expertise
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.7 }}
                >
                  With over 15 years of experience in the technology industry, we've
                  mastered a comprehensive range of cutting-edge technologies and
                  methodologies. Our expertise spans across cloud computing,
                  cybersecurity, artificial intelligence, and modern software
                  development practices.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['AWS Certified', 'Microsoft Partner', 'Google Cloud Expert', 'ISO 27001'].map(
                    (cert) => (
                      <Chip
                        key={cert}
                        label={cert}
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                    )
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                {skills.map((skill, index) => (
                  <Box key={skill.name} sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 1,
                      }}
                    >
                      <Typography variant="body1" fontWeight={500}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: 'linear-gradient(45deg, #1976d2, #dc004e)',
                          },
                        }}
                      />
                    </motion.div>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </motion.div>

          {/* Team */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ mb: 6, fontWeight: 600 }}
            >
              Meet Our Expert Team
            </Typography>
            <Grid container spacing={4}>
              {team.map((member, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        background: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: (theme) =>
                          `1px solid ${
                            theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.1)'
                          }`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        },
                      }}
                    >
                      <Avatar
                        src={member.image}
                        sx={{
                          width: 100,
                          height: 100,
                          mx: 'auto',
                          mb: 2,
                          border: '4px solid',
                          borderColor: 'primary.main',
                        }}
                      />
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        {member.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {member.role}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                        {member.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        ))}
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

        </motion.div>
      </Container>
      
      {/* Temporarily comment out ScrollDrivenApproach to isolate the issue */}
      {/* <ScrollDrivenApproach /> */}
    </Box>
  );
};

export default AboutSection;