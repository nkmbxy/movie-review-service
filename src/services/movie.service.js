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

module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
};
