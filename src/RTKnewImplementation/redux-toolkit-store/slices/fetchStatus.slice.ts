import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface fetchStatusState {
  //  css of bg based would depend upon how these values change
  // states might be janky  but this is  just a prototype
  isFetched: boolean;
}

const initialState: fetchStatusState = {
  isFetched: false,
};

const fetchStateSlice = createSlice({
  name: "fetchState",
  initialState,
  reducers: {
    isFetched: (state) => {
      state.isFetched = !state.isFetched;
    },
  },
});

export const { isFetched } = fetchStateSlice.actions;
export default fetchStateSlice.reducer;
