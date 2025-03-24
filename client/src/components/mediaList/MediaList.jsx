import MediaCard from "./MediaCard";
import Loader from "../general/Loader";
import Error from "../general/Error";
import { useSelector } from "react-redux";

function MediaList({ mediaList, isLoading, error, listType = "general" }) {
  // Getting the bookmarked media from the store
  const { bookmarks } = useSelector((state) => state.bookmark);

  // Creating a set of bookmarked media ids for faster lookup
  const bookmarkedMediaIds = new Set(bookmarks.map((media) => media.id));

  // Displaying a loader if the data is still loading
  if (isLoading)
    return (
      <div className="h-56">
        <Loader />
      </div>
    );

  // Displaying an error message if there was an error fetching the data
  if (error) return <Error error={error} />;

  return (
    <section
      className={`${listType === "trending" ? "flex gap-5 overflow-x-scroll rounded-lg" : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 grid-flow-row"} `}
    >
      {mediaList.map((media) => (
        <MediaCard
          key={media.id}
          mediaData={media}
          isBookmarked={bookmarkedMediaIds.has(media.id)}
          cardType={listType}
        />
      ))}
    </section>
  );
}

export default MediaList;
