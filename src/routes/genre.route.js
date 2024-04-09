const express = require("express");
const router = express.Router();
const movieGenreController = require("../controllers/movieGenre.controller");

router.get("/:genre", movieGenreController.getGenre);

module.exports = router;
