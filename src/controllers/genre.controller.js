const genreService = require("../services/genre.service");
const Genre = require("../models/genre.model");

//แค่ประเภทที่เลือก, ดูหนังที่คล้ายกัน
async function getMoviesSortByGenre(req, res, next) {
  try {
    const { genre } = req.query;
    const movies = await movieGenreService.getMoviesSortByGenre(genre);
    res.status(200).json({ data: movies });
  } catch (err) {
    console.error("Error while getting movies by genre", err.message);
    res.status(500).json({ error: err.message });
    next(err);
  }
}

//สร้างประเภทหนัง
async function createGenre(req, res) {
  try {
    const title = req.body.title;
    const genre = new Genre({ title });
    genre.save();
    res.status(200).send(genre);
  } catch (error) {}
}

module.exports = { getMoviesSortByGenre, createGenre };
