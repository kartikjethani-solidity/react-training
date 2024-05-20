import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByIdThunk } from "../../../components/tookit-store/thunks/fetch-user-thunk/fetch-user.thunk";
import { User } from "../../../types/user";

interface UsersState {
  user: User | null;
}

const initialState = {
  user: null,
} satisfies UsersState as UsersState;

// Then, handle actions in your reducers:
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserByIdThunk.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = action.payload;
    });
  },
});

// Later, dispatch the thunk as needed in the app
export default usersSlice.reducer;
