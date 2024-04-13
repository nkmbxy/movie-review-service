const Genre = require("../models/movieGenre.model");

//ดูประเภทที่เลือก
async function getMoviesSortByGenre(genre) {
  return await Movie.find({ genre }).select("title image");
}

module.exports = { getMoviesSortByGenre };
