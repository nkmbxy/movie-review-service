const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    leadingActor: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    synopsis: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
