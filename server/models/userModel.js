import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

// Get the number of salt rounds for bcrypt hashing from environment variables
const { SALT_ROUNDS } = process.env;

// Define the schema for the User model
const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "A user must have an email."],
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: [8, "Password must be minimum 8 characters long"],
    maxLength: [15, "Password must be maximum of 15 characters long"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm the password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same",
    },
    select: false,
  },
  // bookmarksId stores a reference to a Bookmarks document (if user has a bookmark list)
  bookmarksId: {
    type: mongoose.Schema.ObjectId,
    ref: "Bookmarks",
  },
});

// Pre-save middleware to hash the password before saving to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, Number(SALT_ROUNDS));
  this.passwordConfirm = undefined;
  next();
});

// Instance method to check if the provided password matches the stored password
userSchema.methods.checkPassword = async function (
  inputPassword,
  actualPassword
) {
  return await bcrypt.compare(inputPassword, actualPassword);
};

// Create and export the User model using the userSchema
const User = mongoose.model("User", userSchema);
export default User;
