import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  isDark: boolean;
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  isDark: false,
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      state.mode = state.isDark ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.isDark = action.payload;
      state.mode = action.payload ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;