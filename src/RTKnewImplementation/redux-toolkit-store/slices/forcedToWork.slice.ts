import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { occupiedAnd } from "../../Types";

interface forcedToWorkState {
  isOccupied: occupiedAnd;
}

const initialState: forcedToWorkState = {
  isOccupied: { isWorking: false, isIdle: true },
};

// export const login = createAsyncThunk(
//   // toolkit query ( ) newer alternative
//   "auth/login",
//   async (credentials: Credentials, { rejectWithValue }) => {
//     try {
//       const response = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       });
//       if (!response.ok) {
//         throw new Error("Invalid username or password");
//       }
//       const data = await response.json();
//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const forcedToWorkSlice = createSlice({
  name: "forcedToWork",
  initialState,
  reducers: {
    setWorkingStatus: (state) => {
      state.isOccupied.isWorking = !state.isOccupied.isWorking;
    },
    setIdleStatus: (state) => {
      state.isOccupied.isIdle = !state.isOccupied.isIdle;
    },
  },
});

export const { setWorkingStatus, setIdleStatus } = forcedToWorkSlice.actions;
export default forcedToWorkSlice.reducer;
