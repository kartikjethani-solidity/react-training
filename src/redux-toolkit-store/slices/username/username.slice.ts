import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface usernameState {
  value: string;
  payload: string;
}

const initialState: usernameState = {
  value: "",
  payload: "",
};

export const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    usernameHandle: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { usernameHandle } = usernameSlice.actions;

export default usernameSlice.reducer;
