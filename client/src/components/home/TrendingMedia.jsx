import { useGetTrendingMediaQuery } from "../../features/mediaApi";
import ContentHeading from "../general/ContentHeading";
import MediaList from "../mediaList/MediaList";

function TrendingMedia() {
  // Fetch the trending media
  const {
    data: trendingMedia = [],
    error,
    isLoading,
  } = useGetTrendingMediaQuery();

  return (
    <section className="mediaSectionContainer">
      <ContentHeading title={"Trending"} />
      <MediaList
        mediaList={trendingMedia}
        isLoading={isLoading}
        error={error}
        listType="trending"
      />
    </section>
  );
}

export default TrendingMedia;
