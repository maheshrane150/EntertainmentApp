import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import GlobalErrorHandler from "./controllers/errorController.js";
import mediaRouter from "./routers/mediaRouter.js";
import userRouter from "./routers/userRouter.js";
import bookmarkRouter from "./routers/bookmarkRouter.js";
import cookieParser from "cookie-parser";
import compression from "compression";
import ExpressMongoSanitize from "express-mongo-sanitize";
import AppError from "./utils/AppError.js";

// Load and extract required environment variables from .env file
dotenv.config();
const { CLIENT_URL } = process.env;

const app = express(); // Initialize express application

// Middleware for handling CORS with the specified client URL and enabling credentials (cookies)
// app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(cors({ origin: true, credentials: true }));

// Middleware for parsing cookies in incoming requests
app.use(cookieParser());

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for compressing response bodies for faster transmission
app.use(compression());

// Middleware for sanitizing input data to prevent MongoDB NoSQL injection attacks
app.use(ExpressMongoSanitize());

// Mounting the API routers
app.use("/api/v1/media", mediaRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/bookmarks", bookmarkRouter);

// Catch-all route for handling non-existent routes with a custom error message
app.use("*", (req, res, next) => {
  next(new AppError("Requested route not found", 404));
});

// Middleware to handle all errors in the application globally
app.use(GlobalErrorHandler);

export default app;
