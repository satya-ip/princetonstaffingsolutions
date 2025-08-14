import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/themeSlice';
import navigationSlice from './slices/navigationSlice';
import caseStudiesSlice from './slices/caseStudiesSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    navigation: navigationSlice,
    caseStudies: caseStudiesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;