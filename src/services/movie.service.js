const Movie = require("../models/movie.model");

//ค้นหาหน้าโฮม
async function searchByTitle(title) {
  const movies = await Movie.find({
    title: { $regex: new RegExp(title, "i") },
  }).populate("genre_id");
  return movies;
}

//สุ่มโชว์ 3 เรื่องหน้าโฮม
async function getRandomMovies() {
  return await Movie.aggregate([{ $sample: { size: 3 } }]).populate("genre_id");
}

//จัดหนังตามประเทศ หน้าโฮม, เมาส์โฮเว่อร์แล้วโชว์หลายละเอียด
async function getMoviesByCountry(country) {
  return await Movie.find({ country: country }).populate("genre_id");
}

module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
};
