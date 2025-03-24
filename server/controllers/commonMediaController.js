import asyncHandler from "../utils/asyncHandler.js";
import fetchFromTMDB from "../utils/fetchFromTMDB.js";
import respondSuccess from "../utils/respondSuccess.js";
import {
  formatMediaListData,
  formatMediaRecommendedData,
} from "../utils/dataFormatFactory.js";
import Media from "../models/mediaModel.js";
import mediaHandlerFactory from "./mediaHandlerFactory.js";
import shuffleTwoArrays from "../utils/shuffleArrays.js";

// Handler function to get recommended media
const getRecommendedMedia = asyncHandler(async (req, res, next) => {
  const movieEndpoint = `discover/movie`;
  const tvEndpoint = `discover/tv`;

  const query = `include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`;

  const movieData = await fetchFromTMDB("GET", movieEndpoint, query, next);
  const tvData = await fetchFromTMDB("GET", tvEndpoint, query, next);

  const mediaList = formatMediaRecommendedData(movieData, tvData);

  respondSuccess(200, mediaList, res);
});

// Handler function to get search media (both tv and movies)
const getSearchMediaAll = asyncHandler(async (req, res, next) => {
  const { page = 1, searchtext } = req.query;
  if (!searchtext) throw new AppError("Searchtext is required", 400);

  const movieEndpoint = `search/movie`;
  const tvEndpoint = `search/tv`;

  const query = `query=${searchtext}&include_adult=false&language=en-US&page=${page}`;

  //  Fetch movie and tv data
  const movieData = await fetchFromTMDB("GET", movieEndpoint, query, next);
  const tvData = await fetchFromTMDB("GET", tvEndpoint, query, next);

  // Format and combine, movie and tv data
  const formatedMovieList = formatMediaListData(movieData, "movie");
  const formatedTvList = formatMediaListData(tvData, "tv");

  const combinedData = {
    page: 1,
    results: shuffleTwoArrays(
      formatedMovieList.results,
      formatedTvList.results
    ),
  };

  // Sorting based on year
  // const combinedData = {
  //   page: 1,
  //   results: [...formatedMovieList.results, ...formatedTvList.results].sort(
  //     (a, b) => {
  //       const dateA = a.releaseDate
  //         ? Number(a.releaseDate.slice(0, 4))
  //         : "1000";
  //       const dateB = b.releaseDate
  //         ? Number(b.releaseDate.slice(0, 4))
  //         : "1000";
  //       return dateB - dateA;
  //     }
  //   ),
  // };

  respondSuccess(200, combinedData, res);
});

// Function to insert a media document into the database
async function insertMedia(data) {
  try {
    const mediaData = {
      id: data.id,
      type: data.type || "",
      title: data.title || "",
      // overview: data.overview || "",
      releaseDate: data.releaseDate || "",
      backdropPath: data.backdropPath || "",
    };

    const newMedia = await Media.create(mediaData);
    return newMedia;
  } catch (err) {
    next(err);
  }
}

// Defining a handler to get all trending media
const getTrendingMediaAll = mediaHandlerFactory.getTrendingMedia("all");

const commonMediaController = {
  getTrendingMediaAll,
  getRecommendedMedia,
  getSearchMediaAll,
  insertMedia,
};

export default commonMediaController;
