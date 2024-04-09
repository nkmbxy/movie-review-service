const MovieGenre = require("../models/movieGenre.model");

const getGenreByName = async (genreName) => {
  try {
    const genre = await MovieGenre.findOne({ name: genreName });
    return genre;
  } catch (error) {
    console.error("Error in getGenreByName:", error);
    throw error;
  }
};

module.exports = {
  getGenreByName,
};
