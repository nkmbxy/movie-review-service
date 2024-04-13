const movieService = require("../services/movie.service");

//ค้นหาหน้าโฮม
async function searchByTitle(req, res, next) {
  try {
    console.log(
      "Start searchByTitle.controller req query:",
      JSON.stringify(req?.query, null, 2)
    );
    const { title } = req.query;
    const movies = await movieService.searchByTitle(title);
    res.status(200).json({ data: movies });
  } catch (err) {
    console.error(
      "searchByTitle.controller error while searching movies",
      err.message
    );
    res.status(500).json({ data: err.message });
    next(err);
  }
}

//สุ่มโชว์ 3 เรื่องหน้าโฮม
async function getRandomMovies(req, res, next) {
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
    next(err);
  }
}

//จัดหนังตามประเทศ หน้าโฮม, เมาส์โฮเว่อร์แล้วโชว์หลายละเอียด หน้าโฮม
async function getMoviesByCountry(req, res, next) {
  try {
    console.log(
      "Start getMoviesByCountry.controller req params:",
      JSON.stringify(req?.params, null, 2)
    );
    const { country } = req.params;
    const movies = await movieService.getMoviesByCountry(country);
    res.status(200).json({ data: movies });
  } catch (err) {
    console.error(
      "getMoviesByCountry.controller error while getting movies by country",
      err.message
    );
    res.status(500).json({ data: err.message });
    next(err);
  }
}

module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
};
