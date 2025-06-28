const mongoose = require("mongoose");

// Define User Schema with email and password fields
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },  // Email must be unique
  password: { type: String, required: true }  // Password is required
});

module.exports = mongoose.model("User", UserSchema); // Export Mongoose model
