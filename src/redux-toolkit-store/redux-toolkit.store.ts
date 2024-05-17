import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counter.slice";
import usernameReducer from "./slices/counter/username.slice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    username: usernameReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
