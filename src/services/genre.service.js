const Genre = require("../models/movieGenre.model");

const getGenreByName = async (genreName) => {
  try {
    const genre = await Genre.findOne({ name: genreName }).populate("movies");
    return genre;
  } catch (error) {
    console.error("Error in getGenreByName:", error);
    throw error;
  }
};

module.exports = { getGenreByName };
