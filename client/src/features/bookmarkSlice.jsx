import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
  error: "",
  isLoading: "",
};

// Slice for the bookmarks
const bookmarkSlice = createSlice({
  name: "bookmarkSlice",
  initialState,
  reducers: {
    setBookmarks(state, action) {
      state.bookmarks = action.payload;
      state.error = "";
      state.isLoading = false;
    },

    setBookmarkError(state, action) {
      state.error = action.payload;
    },
    setBookmarkLoading(state, action) {
      state.isLoading = action.payload;
    },
    resetBookmarkState(state) {
      state.bookmarks = [];
      state.error = "";
      state.isLoading = "";
    },
  },
});

export const {
  setBookmarks,
  setBookmarkError,
  setBookmarkLoading,
  resetBookmarkState,
} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
