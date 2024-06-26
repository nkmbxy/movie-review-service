const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    synopsis: {
      type: String,
      required: true,
    },
    genre_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
      required: true,
    },
    review_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
    country: {
      type: String,
      required: true,
    },
    actor: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
  },
  { versionKey: false }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
