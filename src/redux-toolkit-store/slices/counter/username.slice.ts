import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface userNameState {
  value: string;
  payload: string;
}
const initialState: userNameState = {
  value: "",
  payload: "",
};
export const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    modifyUserName: (usernamestate, action: PayloadAction<string>) => {
      usernamestate.value = action.payload;
    },
  },
});

export const { modifyUserName } = usernameSlice.actions;

export default usernameSlice.reducer;
