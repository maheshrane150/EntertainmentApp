import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import {
  useAddUserBookmarkMutation,
  useDeleteUserBookmarkMutation,
} from "../../features/mediaApi";
import { useDispatch } from "react-redux";
import { setBookmarks } from "../../features/bookmarkSlice";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";

function Bookmark({ isBookmarked, id, mediaType }) {
  const dispatch = useDispatch();

  // Getting Add and Delete Bookmark functions from the MediaApi
  const [addUserBookmark, { isLoading: isAddingBookmark }] =
    useAddUserBookmarkMutation();
  const [deleteUserBookmark, { isLoading: isDeletingBookmark }] =
    useDeleteUserBookmarkMutation();

  // Check if the bookmark is updating
  const isUpdatingBookmark = isAddingBookmark || isDeletingBookmark;

  // Handle the bookmark click
  async function handleClick() {
    try {
      // If the media is already bookmarked, delete the bookmark and update the store
      if (isBookmarked) {
        const updatedBookmarks = await deleteUserBookmark({ id }).unwrap();
        dispatch(setBookmarks(updatedBookmarks));
      }

      // If the media is not bookmarked, add the bookmark and update the store
      if (!isBookmarked) {
        const updatedBookmarks = await addUserBookmark({
          id,
          type: mediaType,
        }).unwrap();

        dispatch(setBookmarks(updatedBookmarks));
      }
    } catch (error) {
      toast.error(error.message || "Error updating the bookmarks");
    }
  }

  return (
    <button
      onClick={handleClick}
      className="hover:text-md hover:scale-125 transition-all duration-200"
    >
      <div className="text-xs p-2 bg-secondary bg-opacity-60 rounded-full ">
        {isUpdatingBookmark && (
          <AiOutlineLoading className="animate-spin-slow" />
        )}
        {!isUpdatingBookmark &&
          (isBookmarked ? <FaBookmark /> : <FaRegBookmark />)}
      </div>
    </button>
  );
}

export default Bookmark;
