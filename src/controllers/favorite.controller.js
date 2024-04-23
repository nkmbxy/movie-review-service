const favoriteService = require("../services/favorite.service");
const Favorite = require("../models/favorite.model");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

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
    const token = req.cookies.token;
    const validToken = jwt.verify(token, "HotTwoHot");

    if (!validToken) {
      return res.status(400).send("Invalid Token");
    }
    const movie = await Favorite.find({
      user_id: new ObjectId(validToken.UserID),
    })
      .populate("movie_id")
      .populate({ path: "movie_id", populate: { path: "genre_id" } });
    res.send(movie);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { addFavorite, listFavoritesByUser };
