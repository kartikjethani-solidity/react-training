import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import usersSlice from "./slices/user-slice";
import productSlice from "./slices/product-slice/product.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: usersSlice,
    product: productSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
