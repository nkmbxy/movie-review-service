const Favorite = require("../models/favorite.model");
const mongoose = require("mongoose");

exports.addFavorite = async (userId, movieId) => {
  const favorite = new Favorite({
    user_id: mongoose.Types.ObjectId(userId),
    movie_id: mongoose.Types.ObjectId(movieId),
  });
  await favorite.save();
  return favorite;
};

exports.findFavoritesByUser = async (userId) => {
  return await Favorite.find({
    user_id: mongoose.Types.ObjectId(userId),
  }).populate("movie_id");
};

module.exports = { addFavorite, findFavoritesByUser };
