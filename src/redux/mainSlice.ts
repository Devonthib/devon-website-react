import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EntityState<T> {}

const initialState: EntityState<any> = {};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
});

export const {} = mainSlice.actions;

export default mainSlice.reducer;
