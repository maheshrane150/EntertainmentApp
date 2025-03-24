import { useGetRecommendedMediaQuery } from "../../features/mediaApi";
import ContentHeading from "../general/ContentHeading";
import MediaList from "../mediaList/MediaList";

function RecommendedMedia() {
  // Fetch the recommended media
  const {
    data: recommendedMedia = [],
    error,
    isLoading,
  } = useGetRecommendedMediaQuery();

  return (
    <div className="mediaSectionContainer">
      <ContentHeading title="Recommended for you" />
      <MediaList
        mediaList={recommendedMedia}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default RecommendedMedia;
