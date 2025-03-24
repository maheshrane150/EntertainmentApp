import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import bookmarkReducer from "./features/bookmarkSlice";
import videoModalReducer from "./features/videoModalSlice";
import searchTextreducer from "./features/searchTextSlice";

import { mediaApi } from "./features/mediaApi";

const store = configureStore({
  reducer: {
    [mediaApi.reducerPath]: mediaApi.reducer,
    videoModal: videoModalReducer,
    user: userReducer,
    bookmark: bookmarkReducer,
    searchText: searchTextreducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mediaApi.middleware),
});

export default store;
