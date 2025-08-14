import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
  activeSection: string;
  isMenuOpen: boolean;
}

const initialState: NavigationState = {
  activeSection: 'home',
  isMenuOpen: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { setActiveSection, toggleMenu, closeMenu } = navigationSlice.actions;
export default navigationSlice.reducer;