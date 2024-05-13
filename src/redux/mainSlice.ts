import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EntityState<T> {
  darkMode: boolean;
}

const initialState: EntityState<any> = {
  darkMode: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode } = mainSlice.actions;

export default mainSlice.reducer;
