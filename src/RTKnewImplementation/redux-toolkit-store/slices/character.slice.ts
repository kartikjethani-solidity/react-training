import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface characterState {
  //css of bg based would depend upon how these values change
  //as of now i'll be conditionally rendering based upon proper naming of variables
  // even though i can use a single variable

  isIdle: boolean;
  isWorking: boolean;
}

const initialState: characterState = {
  isIdle: false,
  isWorking: false,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    isIdle: (state) => {
      state.isIdle = true;
      state.isWorking = false;
    },
    isWorking: (state) => {
      state.isWorking = true;
      state.isIdle = false;
    },
  },
});

export const { isIdle, isWorking } = characterSlice.actions;
export default characterSlice.reducer;
