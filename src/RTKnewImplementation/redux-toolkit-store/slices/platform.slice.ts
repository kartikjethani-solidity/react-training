import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface platformState {
  //  css of bg based would depend upon how these values change
  // states might be janky  but this is a prototype
  isPresent: boolean;
  isMovingTowardsCharacter: boolean;
  isMovingAwayFromCharacter: boolean;
  isHoveringBelowTheCharacter: boolean;
  status: string;
}

const initialState: platformState = {
  isPresent: false,
  isMovingTowardsCharacter: false,
  isMovingAwayFromCharacter: false,
  isHoveringBelowTheCharacter: false,
  status: "call platform",
};

const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    isMovingTowardsCharacter: (state) => {
      state.isMovingTowardsCharacter = true;
      state.isMovingAwayFromCharacter = false;
      state.status = "isMovingTowardsCharacter";
      state.isPresent = true;
    },
    isMovingAwayFromCharacter: (state) => {
      state.isMovingAwayFromCharacter = true;
      state.isMovingTowardsCharacter = false;
      state.status = "isMovingAwayFromCharacter";
      state.isPresent = false;
    },
    isHoveringBelowTheCharacter: (state) => {
      state.isHoveringBelowTheCharacter = !state.isHoveringBelowTheCharacter;
      state.status = "isHoveringBelowTheCharacter";
      state.isPresent = true;
    },
  },
});

export const {
  isMovingAwayFromCharacter,
  isMovingTowardsCharacter,
  isHoveringBelowTheCharacter,
} = platformSlice.actions;
export default platformSlice.reducer;
