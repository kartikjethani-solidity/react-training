import { fetchProductByIdThunk } from "../../thunks/fetch-product-thunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: null,
  status: "idle",
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByIdThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurant = action.payload;
      })
      .addCase(fetchProductByIdThunk.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

// Export the reducer
export default restaurantSlice.reducer;
