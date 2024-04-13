const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieGenre.controller");

router.get("/movieSortByGenre", movieController.getMoviesSortByGenre); //ดูตามประเภทที่เลือก, ดูหนังที่คล้ายกัน

module.exports = router;
