const genreService = require("../services/movieGenre.service");

const getGenre = async (req, res, next) => {
  const genreName = req.params.genre;
  try {
    const genre = await genreService.getGenreByName(genreName);
    if (!genre) {
      return res.status(404).send("Genre not found");
    }
    res.json(genre);
  } catch (error) {
    next(error);
  }
};

module.exports = { getGenre };
