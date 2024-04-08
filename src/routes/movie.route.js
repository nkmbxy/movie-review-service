const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");

router.get("/search", movieController.searchByTitle);
router.get("/random", movieController.getRandomMovies);
router.get("/country/:country", movieController.getMoviesByCountry);
router.get("/movieDetails/:id", movieController.getMovieDetails);
router.get("/movieGenre", movieController.getMoviesByGenre);

module.exports = router;
