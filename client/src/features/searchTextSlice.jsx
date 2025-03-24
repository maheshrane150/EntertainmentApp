import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  inputText: "",
};

// Slice for the search text
const searchTextSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },

    setInputText: (state, action) => {
      state.inputText = action.payload;
    },

    resetSearchAndInputText: (state) => {
      state.searchText = "";
      state.inputText = "";
    },
  },
});

export const { setSearchText, setInputText, resetSearchAndInputText } =
  searchTextSlice.actions;

export default searchTextSlice.reducer;
