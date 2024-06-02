const genreService = require("../services/genre.service");
const Genre = require("../models/genre.model");

async function getMoviesSortByGenre(req, res) {
  try {
    const { genre } = req.query;
    const movies = await Genre.findOne({ genre: genre }).populate("movie_id");
    res.status(200).json({ data: movies });
  } catch (err) {
    console.error("Error while getting movies by genre", err.message);
    res.status(500).json({ error: err.message });
  }
}

async function createGenre(req, res) {
  try {
    const genre = req.body.genre;
    const newGenre = new Genre({ genre });
    newGenre.save();
    res.status(200).send(newGenre);
  } catch (error) {}
}

module.exports = { getMoviesSortByGenre, createGenre };
