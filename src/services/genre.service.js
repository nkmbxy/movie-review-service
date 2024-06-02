const Movie = require("../models/movie.model");

async function getMoviesSortByGenre(genre) {
  return await Movie.find({ genres: genre }).select("id image");
}

module.exports = { getMoviesSortByGenre };
