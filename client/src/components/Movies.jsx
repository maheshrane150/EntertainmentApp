import { useEffect, useState } from "react";
import { useGetMediaListQuery } from "../features/mediaApi";
import ContentHeading from "./general/ContentHeading";
import MediaList from "./mediaList/MediaList";
import ShowMoreButton from "./mediaList/ShowMoreButton";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [curPage, setCurPage] = useState(1);

  // Get the list of movies
  const { data, error, isLoading } = useGetMediaListQuery({
    type: "movie",
    page: curPage,
  });

  useEffect(() => {
    if (data) {
      setMovies((prevMovies) => [...prevMovies, ...data]);
    }
  }, [data]);

  function onShowMore() {
    setCurPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="mediaSectionContainer">
      <ContentHeading title="Movies" />
      <MediaList mediaList={movies} isLoading={isLoading} error={error} />
      {!isLoading && (
        <div className="mt-14 mb-8 flex justify-center">
          <ShowMoreButton onClick={onShowMore} />
        </div>
      )}
    </div>
  );
}

export default Movies;
