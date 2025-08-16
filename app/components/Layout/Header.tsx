'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme as useMuiTheme,
} from '@mui/material';
import { Code, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const muiTheme = useMuiTheme();
  const { isDark, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: muiTheme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${muiTheme.palette.divider}`,
        boxShadow: muiTheme.palette.mode === 'dark' 
          ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
          : '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar sx={{ minHeight: '70px !important', px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Code sx={{ 
            mr: 1, 
            fontSize: 28,
            color: muiTheme.palette.primary.main,
          }} />
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              background: `linear-gradient(45deg, ${muiTheme.palette.primary.main}, ${muiTheme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.3rem', md: '1.5rem' },
            }}
          >
            TechCorp
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              sx={{
                color: muiTheme.palette.text.primary,
                fontWeight: pathname === item.path ? 600 : 400,
                fontSize: '0.95rem',
                px: 2,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                position: 'relative',
                '&:hover': {
                  backgroundColor: muiTheme.palette.action.hover,
                  transform: 'translateY(-1px)',
                },
                '&::after': pathname === item.path ? {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: '2px',
                  background: `linear-gradient(45deg, ${muiTheme.palette.primary.main}, ${muiTheme.palette.secondary.main})`,
                  borderRadius: '1px',
                } : {},
                transition: 'all 0.3s ease',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          onClick={handleThemeToggle}
          sx={{
            ml: 2,
            color: muiTheme.palette.text.primary,
            backgroundColor: muiTheme.palette.action.hover,
            '&:hover': {
              backgroundColor: muiTheme.palette.action.selected,
              transform: 'rotate(180deg)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {isDark ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;