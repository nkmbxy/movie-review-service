const movieService = require("../services/movie.service");

async function searchByTitle(req, res) {
  try {
    const { title } = req.body;
    const movies = await movieService.searchByTitle(title);
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
  }
}

async function getRandomMovies(req, res) {
  try {
    const movies = await movieService.getRandomMovies();
    res.status(200).json({ data: movies });
  } catch (error) {
    console.log(error);
  }
}

async function getMoviesByCountry(req, res) {
  try {
    const country = req.query.country;
    const movies = await movieService.getMoviesByCountry(country);
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
};
