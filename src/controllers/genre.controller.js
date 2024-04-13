const genreService = require("../services/movieGenre.service");

//แค่ประเภทที่เลือก
async function getMoviesSortByGenre(req, res, next) {
  try {
    console.log(
      "Start getMoviesSortByGenre.controller req query:",
      JSON.stringify(req.query, null, 2)
    );
    const { genre } = req.query;
    const movies = await movieService.getMoviesSortByGenre(genre);
    res.json({ data: movies, status: 200 });
  } catch (err) {
    console.error(
      "getMoviesSortByGenre.controller error while getting movies by genre",
      err.message
    );
    res.json({ data: err.message, status: 500 });
    next(err);
  }
}

module.exports = { getMoviesSortByGenre };
