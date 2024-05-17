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
  name: "Email",
  initialState,
  reducers: {
    modifyUserEmail: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { modifyUserEmail } = userEmailSlice.actions;

export default userEmailSlice.reducer;
