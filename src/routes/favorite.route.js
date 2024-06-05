const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favorite.controller");

router.post("/add/:movie_id", favoriteController.addFavorite);
router.get("/list", favoriteController.listFavoritesByUser);
router.get("/favColor/:movie_id", favoriteController.favoriteColor);
router.delete("/delete/:movie_id", favoriteController.deleteFavorite);

module.exports = router;
