const Genre = require("../models/genre.model");
const Genre = require("../models/movie.model");

//ดูประเภทที่เลือก, ดูหนังที่คล้ายกัน
async function getMoviesSortByGenre(genre) {
  return await Movie.find({ genres: genre }).select("title image");
}

module.exports = { getMoviesSortByGenre };
