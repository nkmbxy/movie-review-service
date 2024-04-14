const Movie = require("../models/movie.model");

//ดูประเภทที่เลือก, ดูหนังที่คล้ายกัน
async function getMoviesSortByGenre(genre) {
  return await Movie.find({ genres: genre }).select("id image");
}

module.exports = { getMoviesSortByGenre };
