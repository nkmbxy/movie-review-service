const movieService = require("../services/movie.service");
const movieModel = require("../models/movie.model");

//ค้นหาหน้าโฮม
async function searchByTitle(req, res) {
  try {
    const { title } = req.body; // Assuming the title is sent in the request body
    const movies = await movieService.searchByTitle(title);
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    // Handle error appropriately
  }
}

//สุ่มโชว์ 3 เรื่องหน้าโฮม
async function getRandomMovies(req, res) {
  try {
    console.log("Start getRandomMovies.controller");
    const movies = await movieService.getRandomMovies();
    res.status(200).json({ data: movies });
  } catch (err) {
    console.error(
      "getRandomMovies.controller error while getting random movies",
      err.message
    );
    res.status(500).json({ data: err.message });
  }
}

//จัดหนังตามประเทศ หน้าโฮม, เมาส์โฮเว่อร์แล้วโชว์หลายละเอียด หน้าโฮม
async function getMoviesByCountry(req, res) {
  try {
    console.log(
      "Start getMoviesByCountry.controller req query:",
      JSON.stringify(req?.query, null, 2)
    );
    const country = req.query.country;
    const movies = await movieService.getMoviesByCountry(country);
    res.status(200).json(movies);
  } catch (err) {
    console.error(
      "getMoviesByCountry.controller error while getting movies by country",
      err.message
    );
    res.status(500).json({ data: err.message });
  }
}

module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
};
