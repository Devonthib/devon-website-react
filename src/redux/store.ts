// store.ts
import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./mainSlice";

const store = configureStore({
  reducer: {
    main: mainSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export const getCurrentState = () => store.getState();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
