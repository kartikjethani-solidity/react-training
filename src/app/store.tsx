import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/cartSlice";
import { combineReducers } from "redux";

export const store = configureStore({
  reducer: {
    allCart: cartSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
