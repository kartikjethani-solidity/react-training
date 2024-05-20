import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
import { fetchUserByIdThunk } from "../../thunks/fetch-user-thunk";

interface UserState {
  user: User | null;
}

const initialState = {
  user: null,
} satisfies UserState as UserState;

// Then, handle actions in your reducers:
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserByIdThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchUserByIdThunk.rejected, (state) => {
      state.user = null;
    });
  },
});

export default usersSlice.reducer;
