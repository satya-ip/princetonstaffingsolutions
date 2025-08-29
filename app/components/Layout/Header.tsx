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
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Code, Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';
import { commonLabels } from '../../labels';

const Header: React.FC = () => {
  const muiTheme = useMuiTheme();
  const { isDark, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileOpen(false); // Close mobile menu after navigation
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <>
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
            {commonLabels.company.name}
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          {commonLabels.navigation.map((item) => (
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

        {/* Hamburger Menu Button - Mobile Only */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            ml: 2,
            display: { xs: 'flex', md: 'none' },
            color: muiTheme.palette.text.primary,
            backgroundColor: muiTheme.palette.action.hover,
            '&:hover': {
              backgroundColor: muiTheme.palette.action.selected,
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>

    {/* Mobile Navigation Drawer */}
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 280,
          background: muiTheme.palette.mode === 'dark' 
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          backdropFilter: 'blur(20px)',
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Code sx={{ 
            mr: 1, 
            fontSize: 28,
            color: '#64b5f6',
          }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.5rem',
            }}
          >
            {commonLabels.company.name}
          </Typography>
        </Box>
        
        <List>
          {commonLabels.navigation.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: 2,
                  backgroundColor: pathname === item.path 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'transparent',
                  border: pathname === item.path 
                    ? '1px solid rgba(255, 255, 255, 0.2)' 
                    : '1px solid transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateX(5px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: 'white',
                      fontWeight: pathname === item.path ? 600 : 400,
                      fontSize: '1rem',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
    </>
  );
};

export default Header;