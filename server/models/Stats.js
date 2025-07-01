// models/Stats.js
const mongoose = require("mongoose");

const dailyEntrySchema = new mongoose.Schema({
  steps: {
    type: Number,
    default: 0,
  },
  calories: {
    type: Number,
    default: 0,
  }
}, { _id: false });

const statsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true  // one stat array per user
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  data: {
    type: [dailyEntrySchema],
    default: [],
  }
});

module.exports = mongoose.model("Stats", statsSchema);
