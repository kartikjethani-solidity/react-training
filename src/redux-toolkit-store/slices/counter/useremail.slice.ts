import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface userEmailState {
  value: string;
  payload: string;
}

const initialState: userEmailState = {
  value: "",
  payload: "",
};

export const userEmailSlice = createSlice({
  name: "userEmail",
  initialState,
  reducers: {
    modifyEmail: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { modifyEmail } = userEmailSlice.actions;

export default userEmailSlice.reducer;
