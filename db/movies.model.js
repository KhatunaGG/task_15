const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    year: Number,
    isBookmarked: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("movie", movieSchema);
