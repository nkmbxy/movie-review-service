const movieGenreService = require("../services/movieGenre.service");

const getGenre = async (req, res, next) => {
  try {
    const genreName = req.params.genre;
    const genre = await movieGenreService.getGenreByName(genreName);
    if (!genre) {
      return res.status(404).send({ message: "Genre not found" });
    }
    res.json(genre);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGenre,
};
