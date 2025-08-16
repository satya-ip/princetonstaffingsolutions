'use client';

import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { store } from './store';
import { useAppSelector } from './hooks';
import { lightTheme, darkTheme } from './theme/theme';

function ThemeWrapper({ children }: { children: React.ReactNode }) {
	const { isDark } = useAppSelector((state) => state.theme);
	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<ThemeWrapper>{children}</ThemeWrapper>
		</Provider>
	);
} 