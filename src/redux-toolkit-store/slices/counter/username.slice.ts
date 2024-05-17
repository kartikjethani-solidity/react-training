import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface userDetail {
  userid: string;
  userPassword:string;
  payload:string;
}
const initialState: userDetail = {
  userid: "",
  userPassword:"",
  payload:"",
};
export const usernameSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userNameUpdate: (state, action: PayloadAction<string>) => {
      state.userid = action.payload;
    },
    userPasswordUpdate: (state, action: PayloadAction<string>) => {
      state.userPassword = action.payload;
    },
  },
});

export const { userNameUpdate, userPasswordUpdate} = usernameSlice.actions;

export default usernameSlice.reducer;
