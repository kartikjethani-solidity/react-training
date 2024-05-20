import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "../../../../services/user-service";

// First, create the thunk
export const fetchUserByIdThunk = createAsyncThunk("users/fetchByIdStatus", async (userId: number, thunkAPI) => {
  const response = await fetchUserById(userId);
  return response.json();
});
