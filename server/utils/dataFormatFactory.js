import AppError from "./AppError.js";
import shuffleTwoArrays from "./shuffleArrays.js";

//Formats the media list data from the API response.
function formatMediaListData(data, mediaType) {
  const formatedResultsArr = data.results.map((result) => {
    mediaType = result.media_type || mediaType;

    return {
      id: result.id,
      type: mediaType,
      title: result.title || result.name,
      // overview: result.overview,
      releaseDate: result.release_date || result.first_air_date,
      backdropPath: result.backdrop_path,
    };
  });

  const formatedData = { ...data, results: formatedResultsArr };
  return formatedData;
}

//Formats the media details data from the API response.
function formatMediaDetailsData(data, mediaType) {
  const formatedData = {
    id: data.id,
    type: mediaType,
    title: data.title || data.name,
    overview: data.overview,
    tagline: data.tagline || "",
    homepage: data.homepage || "",
    imdbId: data.imdb_id || "",
    status: data.status,
    voteCount: data.vote_count,
    voteAverage: data.vote_average,
    posterPath: data.poster_path,
    languages: data.spoken_languages,
    genres: data.genres,
    releaseDate: data.release_date || data.first_air_date,
  };

  if (mediaType === "movie") {
    formatedData.runtime = data.runtime;
  }

  if (mediaType === "tv") {
    formatedData.lastAirDate = data.last_air_date;
  }

  return formatedData;
}

//Formats the media URL data (e.g., video trailers) from the API response.
function formatMediaUrlData(data) {
  let trailerData = data.results.find(
    (ele) =>
      ele.site === "YouTube" &&
      ele.official === true &&
      (ele.type === "Trailer" || ele.type === "teaser")
  );

  if (!trailerData) trailerData = data[0];

  const formatedData = {
    key: trailerData.key || null,
    site: trailerData.site || "",
    type: trailerData.type || "",
    official: trailerData.official || "",
  };

  return formatedData;
}

//Formats the media cast data (actors/actresses) from the API response.
function formatMediaCastData(data) {
  const formatedCast = data.cast.map((ele) => {
    return {
      name: ele.name,
      profilePath: ele.profile_path,
      character: ele.character,
    };
  });

  return { cast: formatedCast };
}

//Formats recommended media data by combining movies and TV shows.
function formatMediaRecommendedData(movieData, tvData) {
  const formatedMovies = formatMediaListData(movieData, "movie").results;
  const formatedTvShows = formatMediaListData(tvData, "tv").results;
  const minLength = Math.min(formatedMovies.length, formatedTvShows.length);

  const shuffledData = shuffleTwoArrays(
    formatedMovies.slice(0, minLength),
    formatedTvShows.slice(0, minLength)
  );

  const formatedData = [
    ...shuffledData,
    ...formatedMovies.slice(minLength),
    ...formatedTvShows.slice(minLength),
  ];

  return formatedData;
}

function formatMediaDataForBookmark(data, mediaType) {
  return {
    id: data.id,
    type: mediaType,
    title: data.title || data.name,
    releaseDate: data.release_date || data.first_air_date,
    backdropPath: data.backdrop_path,
  };
}

export {
  formatMediaUrlData,
  formatMediaListData,
  formatMediaDetailsData,
  formatMediaCastData,
  formatMediaRecommendedData,
  formatMediaDataForBookmark,
};
