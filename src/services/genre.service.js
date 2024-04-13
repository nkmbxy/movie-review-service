const Genre = require("../models/movieGenre.model");

//ดูประเภทที่เลือก, ดูหนังที่คล้ายกัน
async function getMoviesSortByGenre(genre) {
  return await Movie.find({ genre }).select("title image");
}

module.exports = { getMoviesSortByGenre };
