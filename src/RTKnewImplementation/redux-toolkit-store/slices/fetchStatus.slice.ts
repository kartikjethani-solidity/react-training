import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface fetchStatusState {
  //  css of bg based would depend upon how these values change
  // states might be janky  but this is  just a prototype
  isFetched: boolean;
  isntFetched: boolean;
}

const initialState: fetchStatusState = {
  isFetched: false,
  isntFetched: true,
};

const fetchStateSlice = createSlice({
  name: "fetchState",
  initialState,
  reducers: {
    isFetched: (state) => {
      state.isFetched = true;
    },
    isntFetched: (state) => {
      state.isntFetched = true;
    },
  },
});

export const {} = fetchStateSlice.actions;
export default fetchStateSlice.reducer;
