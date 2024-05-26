import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Users {
  id: string;
  username: string;
  email: string;
  age: number;
}

interface FetchStatusState {
  isFetched: boolean;
  fetchBtnClicked: boolean;
  fetchMsg: string;
  fetchData: Users[];
}

const initialState: FetchStatusState = {
  isFetched: false,
  fetchBtnClicked: false,
  fetchMsg: "fetch to display",
  fetchData: [],
};

// Define the async thunk
export const fetchUsers = createAsyncThunk(
  "fetchState/fetchUsers",
  async () => {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Users[] = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return data;
  }
);

const fetchStateSlice = createSlice({
  name: "fetchState",
  initialState,
  reducers: {
    isFetched: (state) => {
      state.isFetched = true;
      state.fetchBtnClicked = true;
      state.fetchMsg = "Msg fetched! Here is your content";
    },
    isFetching: (state) => {
      state.isFetched = false;
      state.fetchBtnClicked = true;
      state.fetchMsg = "fetch in progress ....";
    },
    fetchUnload: (state) => {
      state.isFetched = false;
      state.fetchBtnClicked = false;
      state.fetchMsg = "fetch Data to display";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isFetched = false;
        state.fetchBtnClicked = true;
        state.fetchMsg = "fetch in progress ....";
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<Users[]>) => {
          state.isFetched = true;
          state.fetchBtnClicked = true;
          state.fetchMsg = "Msg fetched! Here is your content";
          state.fetchData = action.payload;
        }
      )
      .addCase(fetchUsers.rejected, (state) => {
        state.isFetched = false;
        state.fetchBtnClicked = true;
        state.fetchMsg = "Failed to fetch data.";
      });
  },
});

export const { isFetched, isFetching, fetchUnload } = fetchStateSlice.actions;
export default fetchStateSlice.reducer;
