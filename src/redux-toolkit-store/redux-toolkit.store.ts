import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./slices/username/username.slice";

export const store = configureStore({
  reducer: {
    username: usernameReducer,
  },
});
