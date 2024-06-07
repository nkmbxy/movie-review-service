const express = require("express");
const router = express.Router();
const movieController = require("../controllers/genre.controller");

router.get("/movieSortByGenre", movieController.getMoviesSortByGenre);
router.post("/createGenre", movieController.createGenre);
router.get("/getGenre", movieController.getGenre);

module.exports = router;
