import mongoose from "mongoose";

// Define the schema for the Media model
const mediaSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  type: { type: String, required: true, enum: ["tv", "movie"] },
  title: { type: String, required: true },
  // overview: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  backdropPath: { type: String, required: true },
});

// Create and export the Media model using the mediaSchema
const Media = mongoose.model("Media", mediaSchema);
export default Media;
