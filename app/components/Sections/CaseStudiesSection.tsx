'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import {
  TrendingUp,
  Speed,
  Security,
  Close,
  Launch,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCaseStudies } from '../../contexts/CaseStudiesContext';
import { caseStudiesLabels } from '../../labels';

const CaseStudiesSection: React.FC = () => {
  const { 
    studies, 
    loading, 
    selectedStudy, 
    hasMore, 
    loadMoreCaseStudies, 
    setSelectedStudy, 
    clearSelectedStudy 
  } = useCaseStudies();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleLoadMore = () => {
    loadMoreCaseStudies();
  };

  const handleStudyClick = (study: any) => {
    setSelectedStudy(study);
  };

  const handleCloseModal = () => {
    clearSelectedStudy();
  };

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

  return (
    <Box
      id="case-studies"
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
                {caseStudiesLabels.header.title}
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
              >
                {caseStudiesLabels.header.subtitle}
              </Typography>
            </Box>
          </motion.div>

          {/* Case Studies Grid */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {studies.map((study, index) => (
              <Grid item xs={12} md={6} lg={4} key={study.id}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
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
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                        transform: 'translateY(-5px)',
                      },
                    }}
                    onClick={() => handleStudyClick(study)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={study.image}
                      alt={study.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent sx={{ p: 3, height: 'calc(100% - 200px)', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        <Chip
                          label={study.category}
                          size="small"
                          sx={{
                            background: 'linear-gradient(45deg, #1976d2, #dc004e)',
                            color: 'white',
                            fontWeight: 500,
                          }}
                        />
                      </Box>
                      
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        {study.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.6, flexGrow: 1 }}
                      >
                        {study.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {study.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        ))}
                        {study.technologies.length > 3 && (
                          <Chip
                            label={`+${study.technologies.length - 3}`}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Load More Button */}
          {hasMore && (
            <motion.div variants={itemVariants}>
              <Box textAlign="center">
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleLoadMore}
                  disabled={loading}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 30px rgba(25, 118, 210, 0.2)',
                    },
                  }}
                >
                  {loading ? (
                    <>
                      <CircularProgress size={20} sx={{ mr: 1 }} />
                      {caseStudiesLabels.loadMore.loadingText}
                    </>
                  ) : (
                    caseStudiesLabels.loadMore.buttonText
                  )}
                </Button>
              </Box>
            </motion.div>
          )}
        </motion.div>
      </Container>

      {/* Case Study Modal */}
      <Dialog
        open={!!selectedStudy}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(26, 26, 26, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        {selectedStudy && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {selectedStudy.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {selectedStudy.client} • {selectedStudy.duration}
                </Typography>
              </Box>
              <Button
                onClick={handleCloseModal}
                sx={{ minWidth: 'auto', p: 1 }}
              >
                <Close />
              </Button>
            </DialogTitle>
            
            <DialogContent>
              <Box sx={{ mb: 3, position: 'relative', width: '100%', height: 300 }}>
                <Image
                  src={selectedStudy.image}
                  alt={selectedStudy.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  style={{ objectFit: 'cover', borderRadius: 12 }}
                />
              </Box>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                {selectedStudy.description}
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedStudy.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Key Results
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {selectedStudy.results.map((result, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <TrendingUp sx={{ fontSize: 20, color: 'success.main' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={result}
                          primaryTypographyProps={{
                            variant: 'body2',
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button
                variant="contained"
                startIcon={<Launch />}
                sx={{
                  background: 'linear-gradient(45deg, #1976d2, #dc004e)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1565c0, #9a0036)',
                  },
                }}
              >
                {caseStudiesLabels.modal.viewProjectText}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default CaseStudiesSection;