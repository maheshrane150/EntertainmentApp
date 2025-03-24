import { useState, useEffect } from "react";
import { useGetMediaListQuery } from "../features/mediaApi";
import ContentHeading from "./general/ContentHeading";
import MediaList from "./mediaList/MediaList";
import ShowMoreButton from "./mediaList/ShowMoreButton";

function TvShows() {
  const [tvShows, setTvShows] = useState([]);
  const [curPage, setCurPage] = useState(1);

  // Get the list of TV shows
  const { data, error, isLoading } = useGetMediaListQuery({
    type: "tvshow",
    page: curPage,
  });

  useEffect(() => {
    if (data) {
      setTvShows((prevTvShows) => [...prevTvShows, ...data]);
    }
  }, [data]);

  function onShowMore() {
    setCurPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="mediaSectionContainer">
      <ContentHeading title="TV Series" />
      <MediaList mediaList={tvShows} isLoading={isLoading} error={error} />
      {!isLoading && (
        <div className="mt-14 mb-8 flex justify-center">
          <ShowMoreButton onClick={onShowMore} />
        </div>
      )}
    </div>
  );
}

export default TvShows;
