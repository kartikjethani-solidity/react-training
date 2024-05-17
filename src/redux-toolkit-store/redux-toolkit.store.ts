import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./slices/counter/username.slice";
import userEmailReducer from "./slices/counter/useremail.slice";
import userPasswordReducer from "./slices/counter/useremail.slice";

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    userEmail: userEmailReducer,
    userPassword: userPasswordReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
