'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const TechMarquee: React.FC = () => {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Material UI', icon: '🎨' },
    { name: 'TailwindCSS', icon: '🌊' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'Django', icon: '🐍' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: '.NET Core', icon: '🔷' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Microsoft Azure', icon: '🌐' },
    { name: 'Google Cloud', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'GitLab', icon: '🦊' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'OpenAI', icon: '🤖' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'React Native', icon: '📱' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Swift', icon: '🍎' },
    { name: 'Kotlin', icon: '🎯' },
  ];

  // Duplicate the array for seamless looping
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        py: 4,
        overflow: 'hidden',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(100, 181, 246, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      {/* Section Title */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 600,
            opacity: 0.9,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Powered by Industry-Leading Technologies
        </Typography>
      </Box>

      {/* Marquee Container */}
      <Box
        sx={{
          position: 'relative',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Left Gradient Fade */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '100px',
            background: 'linear-gradient(to right, #000000, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* Right Gradient Fade */}
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '100px',
            background: 'linear-gradient(to left, #000000, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* Scrolling Content */}
        <motion.div
          animate={{
            x: [0, -50 * technologies.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 60,
              ease: 'linear',
            },
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '60px',
            whiteSpace: 'nowrap',
          }}
        >
          {duplicatedTechs.map((tech, index) => (
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
                gap: '8px',
                minWidth: '120px',
                cursor: 'pointer',
              }}
            >
              {/* Tech Icon */}
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.2), rgba(244, 143, 177, 0.2))',
                    borderColor: 'rgba(100, 181, 246, 0.5)',
                    boxShadow: '0 8px 32px rgba(100, 181, 246, 0.3)',
                  },
                }}
              >
                {tech.icon}
              </Box>

              {/* Tech Name */}
              <Typography
                variant="caption"
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  opacity: 0.8,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    color: '#64b5f6',
                  },
                }}
              >
                {tech.name}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </Box>

      {/* Bottom Glow Effect */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #64b5f6, #f48fb1, transparent)',
          opacity: 0.6,
        }}
      />
    </Box>
  );
};

export default TechMarquee;