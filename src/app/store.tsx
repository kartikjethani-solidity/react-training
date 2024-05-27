import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    allCart: cartSliceReducer,
  },
});

import { combineReducers } from "redux";

export interface RootState {
  allCart: ReturnType<typeof cartSliceReducer>;
}

export const rootReducer = combineReducers({
  allCart: cartSliceReducer,
});

export type AppDispatch = typeof store.dispatch;
