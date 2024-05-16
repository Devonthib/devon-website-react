import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EntityState<T> {
  darkMode: boolean;
  hamburgerOpen: boolean;
}

const initialState: EntityState<any> = {
  darkMode: false,
  hamburgerOpen: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setHamburgerOpen: (state, action: PayloadAction<boolean>) => {
      state.hamburgerOpen = action.payload;
    },
  },
});

export const { setDarkMode, setHamburgerOpen } = mainSlice.actions;

export default mainSlice.reducer;
