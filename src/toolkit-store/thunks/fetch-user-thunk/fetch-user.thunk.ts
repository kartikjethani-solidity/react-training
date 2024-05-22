import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserById } from "../../../services/user-service";

export const fetchUserByIdThunk = createAsyncThunk(
  "users/fetchUserById",
  async (userId: number, thunkAPI) => {
    const response = await fetchUserById(userId);
    return response.json();
  }
);
