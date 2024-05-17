import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface passwordState {
  value: string;
  payload: string;
}

const initialState: passwordState = {
  value: "",
  payload: "",
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { incrementByAmount } = passwordSlice.actions;

export default passwordSlice.reducer;
