const spoilService = require("../services/spoil.service");

const getSpoil = async (req, res, next) => {
  try {
    const movieId = req.params.movieId;
    const spoil = await spoilService.getSpoilByMovieId(movieId);
    res.json({ success: true, spoil });
  } catch (error) {
    console.error("spoil.controller error getting spoil:", error);
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

module.exports = {
  getSpoil,
};
