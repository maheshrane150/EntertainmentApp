import AppError from "../utils/AppError.js";
import asyncHandler from "../utils/asyncHandler.js";
import fetchFromTMDB from "../utils/fetchFromTMDB.js";
import respondSuccess from "../utils/respondSuccess.js";
import {
  formatMediaListData,
  formatMediaDetailsData,
  formatMediaUrlData,
  formatMediaCastData,
} from "../utils/dataFormatFactory.js";

/*


*/

// Handler function to get a list of media (movies or TV shows)
function getMediaList(mediaType = "movie") {
  return asyncHandler(async (req, res, next) => {
    const endpoint = `discover/${mediaType}`;
    const page = req.query.page || 1;
    const query = `include_adult=false&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc`;

    const data = await fetchFromTMDB("GET", endpoint, query, next);
    const mediaList = formatMediaListData(data, mediaType);

    respondSuccess(200, mediaList, res);
  });
}

/*


*/

// Handler function to search for media (movies or TV shows)
function getSearchMedia(mediaType = "movie") {
  return asyncHandler(async (req, res, next) => {
    const endpoint = `search/${mediaType}`;
    const { page = 1, searchtext } = req.query;

    if (!searchtext) {
      throw new AppError("Searchtext is required", 400);
    }

    const query = `query=${searchtext}&include_adult=false&language=en-US&page=${page}`;

    const data = await fetchFromTMDB("GET", endpoint, query, next);
    const mediaList = formatMediaListData(data, mediaType);

    respondSuccess(200, mediaList, res);
  });
}

/*


*/

// Handler function to get details of a specific media by ID
function getMediaDetailsById(mediaType = "movie") {
  return asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const endpoint = `${mediaType}/${id}`;
    const query = `language=en-US`;

    if (!id) {
      throw new AppError("id is required", 400);
    }

    const data = await fetchFromTMDB("GET", endpoint, query, next);
    const mediaDetails = formatMediaDetailsData(data, mediaType);

    respondSuccess(200, mediaDetails, res);
  });
}

/*


*/

// Handler function to get media URLs (e.g., trailers) by ID
function getMediaUrlById(mediaType = "movie") {
  return asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const endpoint = `${mediaType}/${id}/videos`;
    const query = `language=en-US`;

    if (!id) {
      throw new AppError("id is required", 400);
    }

    const data = await fetchFromTMDB("GET", endpoint, query, next);

    if (data.results.length === 0)
      return next(new AppError("No trailer found", 404));

    const urlData = formatMediaUrlData(data, mediaType);

    respondSuccess(200, urlData, res);
  });
}

/*


*/

// Handler function to get the cast of a specific media by ID
function getMediaCastById(mediaType = "movie") {
  return asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const endpoint = `${mediaType}/${id}/credits`;
    const query = `language=en-US`;

    if (!id) {
      throw new AppError("id is required", 400);
    }

    const data = await fetchFromTMDB("GET", endpoint, query, next);
    const castData = formatMediaCastData(data, mediaType);

    respondSuccess(200, castData, res);
  });
}

/*


*/

// Handler function to get trending media (movies or TV shows)
function getTrendingMedia(mediaType = "movie") {
  return asyncHandler(async (req, res, next) => {
    const endpoint = `trending/${mediaType}/day`;
    const query = `language=en-US`;

    const data = await fetchFromTMDB("GET", endpoint, query, next);
    const trendingMedia = formatMediaListData(data, mediaType);

    respondSuccess(200, trendingMedia, res);
  });
}

/*


*/

//Create and export the mediaHandlerFactory
const mediaHandlerFactory = {
  getMediaList,
  getSearchMedia,
  getMediaDetailsById,
  getMediaUrlById,
  getMediaCastById,
  getTrendingMedia,
};

export default mediaHandlerFactory;
