import { createSlice } from "@reduxjs/toolkit";
export interface platformState {
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
  status: ": (",
};

const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    isMovingTowardsCharacter: (state) => {
      state.isPresent = true;
      state.isMovingTowardsCharacter = true;
      state.isMovingAwayFromCharacter = false;
      state.isHoveringBelowTheCharacter = false;
      state.status = "-->";
    },
    isMovingAwayFromCharacter: (state) => {
      state.isPresent = false;
      state.isMovingTowardsCharacter = false;
      state.isMovingAwayFromCharacter = false;
      state.isHoveringBelowTheCharacter = false;
      state.status = "<--";
    },
    isHoveringBelowTheCharacter: (state) => {
      state.isPresent = true;
      state.isMovingTowardsCharacter = false;
      state.isMovingAwayFromCharacter = false;
      state.isHoveringBelowTheCharacter = true;
      state.status = "'---'";
      console.log(state.status);
    },
  },
});

export const {
  isMovingAwayFromCharacter,
  isMovingTowardsCharacter,
  isHoveringBelowTheCharacter,
} = platformSlice.actions;
export default platformSlice.reducer;
