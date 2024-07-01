import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Users {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

interface FetchStatusState {
  isFetched: boolean;
  fetchBtnClicked: boolean;
  fetchMsg: string;
  fetchData: Users;
  fetchDisplay: boolean;
  displayBtnClicked: boolean;
}

const initialState: FetchStatusState = {
  isFetched: false,
  fetchBtnClicked: false,
  fetchMsg: "fetch to display",
  fetchData: {
    id: 0,
    name: "",
    category: "",
    description: "",
    image: "",
  },
  fetchDisplay: false,
  displayBtnClicked: false,
};

// Define the async thunk
export const fetchUsers = createAsyncThunk(
  "fetchState/fetchUsers",
  async () => {
    const response = await fetch(
      "https://localhost:5128/api/Product/product/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Users = await response.json();

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
      state.fetchMsg = "Msg fetched!";
      state.fetchDisplay = false;
    },
    isFetching: (state) => {
      state.isFetched = false;
      state.fetchBtnClicked = true;
      state.fetchMsg = "fetch in progress ....";
      state.fetchDisplay = false;
    },
    fetchUnload: (state) => {
      state.isFetched = false;
      state.fetchBtnClicked = false;
      state.fetchMsg = "fetch Data to display";
      state.fetchDisplay = false;
      state.displayBtnClicked = false;
    },

    fetchDisplay: (state) => {
      state.isFetched = false;
      state.fetchBtnClicked = false;
      state.fetchMsg = "Data ";
      state.fetchDisplay = true;
    },
    displayBtnClicked: (state) => {
      state.displayBtnClicked = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isFetched = false;
        state.fetchBtnClicked = true;
        state.fetchMsg = "fetch in progress ....";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Users>) => {
        state.isFetched = true;
        state.fetchBtnClicked = true;
        state.fetchMsg = "Msg fetched! Green button to display";
        state.fetchData = action.payload;
        console.log(state.fetchData);
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isFetched = false;
        state.fetchBtnClicked = true;
        state.fetchMsg = "Failed to fetch data.";
      });
  },
});

export const {
  isFetched,
  isFetching,
  fetchUnload,
  fetchDisplay,
  displayBtnClicked,
} = fetchStateSlice.actions;
export default fetchStateSlice.reducer;
