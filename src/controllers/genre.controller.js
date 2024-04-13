const genreService = require("../services/movieGenre.service");

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
module.exports = { getMoviesSortByGenre };
