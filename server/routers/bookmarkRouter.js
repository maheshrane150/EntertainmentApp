import express from "express";
import bookmarksController from "../controllers/bookmarkController.js";
import authController from "../controllers/authController.js";

const router = express.Router();

// Middleware to protect routes, ensuring only authenticated users can access them
router.use(authController.protect);

// Route to handle fetching all bookmarks, adding a new bookmark, and deleting a bookmark
router
  .route("/")
  .get(bookmarksController.getBookmarks)
  .post(bookmarksController.addBookmark)
  .delete(bookmarksController.deleteBookmark);

export default router;
