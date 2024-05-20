import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById } from "../../../services/user-service";

export const fetchProductByIdThunk = createAsyncThunk(
  "restaurants/fetchProductById",
  async (userId: number, thunkAPI) => {
    try {
      const data = await fetchProductById(userId);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
