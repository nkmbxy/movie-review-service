const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieGenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const MovieGenre = mongoose.model("MovieGenre", movieGenreSchema);

module.exports = MovieGenre;
