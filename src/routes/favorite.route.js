const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favorite.controller");

router.post("/add", favoriteController.addFavorite);
router.get("/list/:userId", favoriteController.listFavoritesByUser);

module.exports = router;
