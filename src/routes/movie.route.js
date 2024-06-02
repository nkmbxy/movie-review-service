const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");

router.get("/search", movieController.searchByTitle);
router.get("/random", movieController.getRandomMovies);
router.get("/country", movieController.getMoviesByCountry);

module.exports = router;
