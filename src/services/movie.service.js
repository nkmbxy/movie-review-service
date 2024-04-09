const Movie = require("../models/movie.model");

async function searchByTitle(title) {
  return await Movie.find({ title: { $regex: new RegExp(title, "i") } });
}

async function getRandomMovies() {
  return await Movie.aggregate([{ $sample: { size: 3 } }]);
}

async function getMoviesByCountry(country) {
  return await Movie.find({ country });
}

async function getDetails(id) {
  return await Movie.findById(id).select("title actor funny genre synopsis");
}

async function getMoviesSortByGenre(genre) {
  return await Movie.find({ genre }).select("title image");
}

module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
  getDetails,
  getMoviesSortByGenre,
};
