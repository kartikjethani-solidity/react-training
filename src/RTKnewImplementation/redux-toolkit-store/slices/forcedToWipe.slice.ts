import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface forcedToWipeState {
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  validationError: string | null;
}

const initialState: forcedToWipeState = {
  isLoading: false,
  error: null,
  isAuthenticated: false,
  validationError: null,
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

const forcedToWipeSlice = createSlice({
  name: "forcedToSleep",
  initialState,
  reducers: {
    setValidationError: (state, action: PayloadAction<string>) => {
      state.validationError = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setValidationError, logout } = forcedToWipeSlice.actions;
export default forcedToWipeSlice.reducer;
