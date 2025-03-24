import mediaHandlerFactory from "./mediaHandlerFactory.js";

// Specific handlers for TV shows
const getTvShows = mediaHandlerFactory.getMediaList("tv");
const getSearchTvShows = mediaHandlerFactory.getSearchMedia("tv");
const getTvShowDetailsById = mediaHandlerFactory.getMediaDetailsById("tv");
const getTvShowUrlById = mediaHandlerFactory.getMediaUrlById("tv");
const getTvShowCast = mediaHandlerFactory.getMediaCastById("tv");

const tvController = {
  getTvShows,
  getSearchTvShows,
  getTvShowDetailsById,
  getTvShowUrlById,
  getTvShowCast,
};

export default tvController;
