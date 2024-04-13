const express = require("express");
const router = express.Router();
const genreController = require("../controllers/movieGenre.controller");

router.get("/movieSortByGenre", movieController.getMoviesSortByGenre); //ดูตามประเภทที่เลือก

module.exports = router;
