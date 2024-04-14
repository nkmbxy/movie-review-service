const favoriteService = require("../services/favorite.service");

async function addFavorite(req, res, next) {
  try {
    const { userId, movieId } = req.body;
    const favorite = await favoriteService.addFavorite(userId, movieId);
    res.status(201).json(favorite);
  } catch (error) {
    next(error);
  }
}

async function listFavoritesByUser(req, res, next) {
  try {
    const userId = req.params.userId;
    const favorites = await favoriteService.findFavoritesByUser(userId);
    res.status(200).json(favorites);
  } catch (error) {
    next(error);
  }
}

module.exports = { addFavorite, listFavoritesByUser };
