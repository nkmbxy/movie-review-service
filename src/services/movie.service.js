const Movie = require("../models/movie.model");
const Review = require("../models/review.model");

//ค้นหาหน้าโฮม
async function searchByTitle(title) {
  return await Movie.find({ title: { $regex: new RegExp(title, "i") } });
}

//สุ่มโชว์ 3 เรื่องหน้าโฮม
async function getRandomMovies() {
  return await Movie.aggregate([{ $sample: { size: 3 } }]);
}

//จัดหนังตามประเทศ หน้าโฮม, เมาส์โฮเว่อร์แล้วโชว์หลายละเอียด
async function getMoviesByCountry(country) {
  return await Movie.find({ country });
}

module.exports = {
  searchByTitle,
  getRandomMovies,
  getMoviesByCountry,
};
