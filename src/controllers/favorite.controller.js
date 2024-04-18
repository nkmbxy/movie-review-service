const favoriteService = require("../services/favorite.service");
const Favorite = require("../models/favorite.model");

async function addFavorite(req, res) {
  try {
    const { user_id, movie_id } = req.body;
    const favorite = new Favorite({ user_id, movie_id });
    await favorite.save();
    res.status(201).json(favorite);
  } catch (error) {
    console.log(error);
  }
}

async function listFavoritesByUser(req, res) {
  try {
    const userId = req.params.userId;
    const favorites = await favoriteService.findFavoritesByUser(userId);
    res.status(200).json(favorites);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { addFavorite, listFavoritesByUser };
