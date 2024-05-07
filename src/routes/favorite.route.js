const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favorite.controller");

router.post("/add", favoriteController.addFavorite);
router.get("/list", favoriteController.listFavoritesByUser);
router.get("/favColor/:movie_id", favoriteController.favoriteColor);

module.exports = router;
