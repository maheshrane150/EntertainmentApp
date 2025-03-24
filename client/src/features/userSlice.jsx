import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

// Slice for the user data
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserdata(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    resetUserData(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setUserdata, resetUserData } = userSlice.actions;

export default userSlice.reducer;
