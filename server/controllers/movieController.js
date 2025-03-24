import mediaHandlerFactory from "./mediaHandlerFactory.js";

// Specific handlers for movies
const getMovies = mediaHandlerFactory.getMediaList("movie");
const getSearchMovies = mediaHandlerFactory.getSearchMedia("movie");
const getMovieDetailsById = mediaHandlerFactory.getMediaDetailsById("movie");
const getMovieUrlById = mediaHandlerFactory.getMediaUrlById("movie");
const getMovieCast = mediaHandlerFactory.getMediaCastById("movie");

const movieController = {
  getMovies,
  getSearchMovies,
  getMovieDetailsById,
  getMovieUrlById,
  getMovieCast,
};

export default movieController;
