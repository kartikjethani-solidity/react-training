import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface userPasswordState {
  value: string;
  payload: string;
}

const initialState: userPasswordState = {
  value: "",
  payload: "",
};

export const userPasswordSlice = createSlice({
  name: "Password",
  initialState,
  reducers: {
    modifyUserName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { modifyUserName } = userPasswordSlice.actions;

export default userPasswordSlice.reducer;
