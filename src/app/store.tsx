import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    allCart: cartSliceReducer,
  },
});

// rootState.ts

import { combineReducers } from "redux";
// import { cartReducer } from './reducers/cartReducer'; // Import your individual reducers
// Import other reducers if you have them

// Define RootState interface by combining all your individual state slices
export interface RootState {
  allCart: ReturnType<typeof cartSliceReducer>; // Adjust this according to your reducer structure
  // Add other slices of state if you have them
}

// Combine individual reducers using combineReducers
export const rootReducer = combineReducers({
  allCart: cartSliceReducer,
  // Add other reducers if you have them
});

export type AppDispatch = typeof store.dispatch;
