const Spoil = require("../models/spoil.model");

const getSpoilByMovieId = async (movieId, session = null) => {
  try {
    const spoil = await Spoil.findOne({ movie_id: movieId }).session(session);
    return spoil;
  } catch (error) {
    console.error("spoil.service error getting spoil by movieId:", error);
    throw error;
  }
};

module.exports = {
  getSpoilByMovieId,
};
