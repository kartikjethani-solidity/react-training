import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./slices/counter/username.slice";
import userPasswordReducer from "./slices/counter/userpassword.slice";
import userEmailReducer from "./slices/counter/useremail.slice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    username: usernameReducer,
    userPassword: userPasswordReducer,
    userEmail: userEmailReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
