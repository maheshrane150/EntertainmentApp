import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLazyGetUserBookmarksQuery } from "../features/mediaApi";

import {
  setBookmarks,
  setBookmarkError,
  setBookmarkLoading,
} from "../features/bookmarkSlice";

// Custom hook to load the user's bookmarks
export function useLoadUserBookmarks() {
  const dispatch = useDispatch();

  // Get the user's authentication status
  const { isAuthenticated } = useSelector((state) => state.user);

  // Get the user's bookmarks from the server
  const [getUserBookmarks, { isLoading: isBookmarksLoading }] =
    useLazyGetUserBookmarksQuery();

  // Load the user's bookmarks to the store
  useEffect(() => {
    async function loadBookmarks() {
      try {
        dispatch(setBookmarkLoading(true));
        const bookmarks = await getUserBookmarks().unwrap();
        dispatch(setBookmarks(bookmarks));
      } catch (err) {
        dispatch(setBookmarkError(err));
        toast.error(err.message || "Error loading bookmarks");
      } finally {
        dispatch(setBookmarkLoading(false));
      }
    }

    if (isAuthenticated) {
      loadBookmarks();
    }
  }, [isAuthenticated, getUserBookmarks, dispatch]);

  return isBookmarksLoading;
}
