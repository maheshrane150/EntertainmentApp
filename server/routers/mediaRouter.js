import express from "express";
import commonMediaController from "../controllers/commonMediaController.js";
import tvController from "../controllers/tvController.js";
import movieController from "../controllers/movieController.js";

const router = express.Router();

// Routes for movie-related operations
router.get("/movies", movieController.getMovies);
router.get("/movies/search", movieController.getSearchMovies); //search?searchText=venom
router.get("/movies/:id", movieController.getMovieDetailsById);
router.get("/movies/url/:id", movieController.getMovieUrlById);
router.get("/movies/cast/:id", movieController.getMovieCast);

// Routes for TV show-related operations
router.get("/tvshows", tvController.getTvShows);
router.get("/tvshows/search", tvController.getSearchTvShows); //search?searchText=venom
router.get("/tvshows/:id", tvController.getTvShowDetailsById);
router.get("/tvshows/url/:id", tvController.getTvShowUrlById);
router.get("/tvshows/cast/:id", tvController.getTvShowCast);

// Routes for common media operations
router.get("/trending", commonMediaController.getTrendingMediaAll);
router.get("/recommended", commonMediaController.getRecommendedMedia);
router.get("/search", commonMediaController.getSearchMediaAll);
export default router;
