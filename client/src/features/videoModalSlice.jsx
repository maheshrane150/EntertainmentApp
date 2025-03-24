import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  mediaId: "",
  mediaType: "",
};

// Slice for the video modal
const videoModalSlice = createSlice({
  name: "videoModalSlice",
  initialState,
  reducers: {
    openVideoModal(state, action) {
      state.isOpen = true;
      state.mediaId = action.payload.id;
      state.mediaType = action.payload.type;
    },

    closeVideoModal(state) {
      state.isOpen = false;
      state.mediaId = "";
      state.mediaType = "";
    },

    resetVideoState(state) {
      state.isOpen = false;
      state.mediaId = "";
      state.mediaType = "";
    },
  },
});

export const { openVideoModal, closeVideoModal, resetVideoState } =
  videoModalSlice.actions;

export default videoModalSlice.reducer;
