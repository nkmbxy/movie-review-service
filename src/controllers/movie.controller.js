const movieService = require("../services/movie.service");

//ค้นหาหน้าโฮม ได้
async function searchByTitle(req, res) {
  try {
    const { title } = req.body;
    const movies = await movieService.searchByTitle(title);
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
  }
}

//สุ่มโชว์ 3 เรื่องหน้าโฮม ได้
async function getRandomMovies(req, res) {
  try {
    const movies = await movieService.getRandomMovies();
    res.status(200).json({ data: movies });
  } catch (err) {
    console.log(error);
  }
}

//จัดหนังตามประเทศ หน้าโฮม, เมาส์โฮเว่อร์แล้วโชว์หลายละเอียด หน้าโฮม ได้
async function getMoviesByCountry(req, res) {
  try {
    const country = req.query.country;
    const movies = await movieService.getMoviesByCountry(country);
    res.status(200).json(movies);
  } catch (err) {
    console.log(error);
  }
}

module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
};
