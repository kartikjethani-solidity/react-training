import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface fetchStatusState {
  //  css of bg based would depend upon how these values change
  // states might be janky  but this is  just a prototype
  isFetched: boolean;
  fetchBtnClicked: boolean;
  fetchMsg: string;
}

const initialState: fetchStatusState = {
  isFetched: false,
  fetchBtnClicked: false,
  fetchMsg: "fetch to display ",
};

const fetchStateSlice = createSlice({
  name: "fetchState",
  initialState,
  reducers: {
    isFetched: (state) => {
      state.isFetched = !state.isFetched;
      state.fetchBtnClicked = true;
      state.fetchMsg = "Msg fetched ! Here is your content ";
    },
    isFetching: (state) => {
      state.fetchBtnClicked = true;
      state.fetchMsg = "fetch in progress ....";
    },
    fetchUnload: (state) => {
      state.fetchBtnClicked = false;
      state.fetchMsg = "fetch Data to display  ";
    },
  },
});

export const { isFetched, isFetching, fetchUnload } = fetchStateSlice.actions;
export default fetchStateSlice.reducer;
