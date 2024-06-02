const Movie = require("../models/movie.model");

async function searchByTitle(title) {
  const movies = await Movie.find({
    title: { $regex: new RegExp(title, "i") },
  }).populate("genre_id");
  return movies;
}

async function getRandomMovies() {
  return await Movie.aggregate([{ $sample: { size: 3 } }]).populate("genre_id");
}

async function getMoviesByCountry(country) {
  return await Movie.find({ country: country }).populate("genre_id");
}

module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
};
