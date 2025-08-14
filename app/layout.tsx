'use client';

import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { store } from './store';
import { useAppSelector } from './hooks';
import { lightTheme, darkTheme } from './theme/theme';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>World-Class IT Services - TechCorp</title>
        <meta name="description" content="Transform your business with cutting-edge IT solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </Provider>
      </body>
    </html>
  );
}