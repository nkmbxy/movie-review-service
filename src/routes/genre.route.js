const express = require("express");
const router = express.Router();
const genreController = require("../controllers/movieGenre.controller");

router.get("/:genre", genreController.getGenre);

module.exports = router;
