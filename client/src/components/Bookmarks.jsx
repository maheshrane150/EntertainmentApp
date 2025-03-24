import { useSelector } from "react-redux";

import ContentHeading from "./general/ContentHeading";
import MediaList from "./mediaList/MediaList";

function Bookmarks() {
  // Get the bookmarks from the store
  const { bookmarks, isLoading, error } = useSelector(
    (state) => state.bookmark,
  );

  const bookmarkedMovies = bookmarks.filter(
    (bookmark) => bookmark.type === "movie",
  );

  const bookmarkedTVShows = bookmarks.filter(
    (bookmark) => bookmark.type === "tv",
  );

  return (
    <div className="">
      <div className="">
        <ContentHeading title="Bookmarked movies" />
        {bookmarkedMovies.length > 0 && (
          <MediaList
            mediaList={bookmarkedMovies}
            isLoading={isLoading}
            error={error}
          />
        )}
        {bookmarkedMovies.length === 0 && (
          <p className="text-lg">No bookmarks found.</p>
        )}
      </div>

      <div className="mt-20">
        <ContentHeading title="Bookmarked TV shows" />
        {bookmarkedTVShows.length > 0 && (
          <MediaList
            mediaList={bookmarkedTVShows}
            isLoading={isLoading}
            error={error}
          />
        )}
        {bookmarkedTVShows.length === 0 && (
          <p className="text-lg">No bookmarks found.</p>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
