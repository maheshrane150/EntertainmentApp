import mongoose from "mongoose";

// Define the schema for the Bookmarks model
const bookmarksSchema = mongoose.Schema({
  // An array of ObjectIds referencing Media documents
  bookmarkList: {
    type: [mongoose.Schema.ObjectId],
    ref: "Media",
    default: [],
  },

  // owner of the bookmark list (a user)
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A bookmarklist must belong to a user"],
  },
});

// Create the Bookmarks model using the bookmarksSchema
const Bookmarks = mongoose.model("Bookmarks", bookmarksSchema);

// Middleware to populate the bookmarkList field with data from the Media model
bookmarksSchema.pre(/^find/, function (next) {
  this.populate({
    path: "bookmarkList",
    model: "Media",
  });
  next();
});

// Export the Bookmarks model for use in other parts of the application
export default Bookmarks;
