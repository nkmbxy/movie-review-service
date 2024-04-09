const movieService = require("../services/movie.service");

async function searchByTitle(req, res, next) {
  try {
    console.log(
      "Start searchByTitle.controller req query:",
      JSON.stringify(req?.query, null, 2)
    );
    const { title } = req.query;
    const movies = await movieService.searchByTitle(title);
    res.json({ data: movies, status: 200 });
  } catch (err) {
    console.error(
      "searchByTitle.controller error while searching movies",
      err.message
    );
    res.json({ data: err.message, status: 500 });
    next(err);
  }
}

async function getRandomMovies(req, res, next) {
  try {
    console.log("Start getRandomMovies.controller");
    const movies = await movieService.getRandomMovies();
    res.json({ data: movies, status: 200 });
  } catch (err) {
    console.error(
      "getRandomMovies.controller error while getting random movies",
      err.message
    );
    res.json({ data: err.message, status: 500 });
    next(err);
  }
}

async function getMoviesByCountry(req, res, next) {
  try {
    console.log(
      "Start getMoviesByCountry.controller req params:",
      JSON.stringify(req?.params, null, 2)
    );
    const { country } = req.params;
    const movies = await movieService.getMoviesByCountry(country);
    res.json({ data: movies, status: 200 });
  } catch (err) {
    console.error(
      "getMoviesByCountry.controller error while getting movies by country",
      err.message
    );
    res.json({ data: err.message, status: 500 });
    next(err);
  }
}

async function getDetails(req, res, next) {
  try {
    console.log(
      "Start getDetails.controller req params:",
      JSON.stringify(req.params, null, 2)
    );
    const { id } = req.params;
    const details = await movieService.getDetails(id);
    res.json({ data: details, status: 200 });
  } catch (err) {
    console.error(
      "getDetails.controller error while getting movie details",
      err.message
    );
    res.json({ data: err.message, status: 500 });
    next(err);
  }
}

async function getMoviesByGenre(req, res, next) {
  try {
    console.log(
      "Start getMoviesByGenre.controller req query:",
      JSON.stringify(req.query, null, 2)
    );
    const { genre } = req.query;
    const movies = await movieService.getMoviesByGenre(genre);
    res.json({ data: movies, status: 200 });
  } catch (err) {
    console.error(
      "getMoviesByGenre.controller error while getting movies by genre",
      err.message
    );
    res.json({ data: err.message, status: 500 });
    next(err);
  }
}
module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
  getDetails,
  getMoviesByGenre,
};
