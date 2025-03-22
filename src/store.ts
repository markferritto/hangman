import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

// Inferred types for use in hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
