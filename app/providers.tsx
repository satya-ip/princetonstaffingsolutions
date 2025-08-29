'use client';

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { CaseStudiesProvider } from './contexts/CaseStudiesContext';
import { lightTheme, darkTheme } from './theme/theme';

function ThemeWrapper({ children }: { children: React.ReactNode }) {
	const { isDark } = useTheme();
	return (
		<MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<CssBaseline />
			{children}
		</MuiThemeProvider>
	);
}

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider>
			<CaseStudiesProvider>
				<ThemeWrapper>{children}</ThemeWrapper>
			</CaseStudiesProvider>
		</ThemeProvider>
	);
} 