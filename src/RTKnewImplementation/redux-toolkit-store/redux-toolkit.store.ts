import { configureStore } from "@reduxjs/toolkit";

import forcedToWorkReducer from "./slices/forcedToWork.slice";
import forcedToDisplayReducer from "./slices/forcedToDisplay.slice";
import forcedToWipeReducer from "./slices/forcedToWipe.slice";
import forcedToFetchReducer from "./slices/forcedToFetch.slice";
export const store = configureStore({
  reducer: {
    forcedToWork: forcedToWorkReducer,
    forcedToFetch: forcedToFetchReducer,
    forcedToWipe: forcedToWipeReducer,
    forcedToDisplay: forcedToDisplayReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
