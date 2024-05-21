import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./slices/counter/username.slice";
import passwordReducer from "./slices/counter/password.slice";
import authReducer from "./slices/counter/auth.slice";
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    username: usernameReducer,
    password: passwordReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
