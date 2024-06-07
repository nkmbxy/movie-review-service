const Movie = require("../models/movie.model");

async function searchByTitle(title) {
  const movies = await Movie.find({
    title: { $regex: new RegExp(title, "i") },
  }).populate("genre_id");
  return movies;
}

async function getRandomMovies() {
  return await Movie.find().populate("genre_id").limit(3);
}

async function getMoviesByCountry(country) {
  return await Movie.find({ country: country }).populate("genre_id");
}

module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
};
