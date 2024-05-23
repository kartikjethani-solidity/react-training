import { configureStore } from "@reduxjs/toolkit";

import characterReducer from "./slices/character.slice";
import platformReducer from "./slices/platform.slice";
import fetchStatusReducer from "./slices/fetchStatus.slice";
export const store = configureStore({
  reducer: {
    platform: platformReducer,
    character: characterReducer,
    fetchStatus: fetchStatusReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
