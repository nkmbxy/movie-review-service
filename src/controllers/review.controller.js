const reviewService = require("../services/review.service");
const movieService = require("../services/movie.service");
const mongoose = require("mongoose");

//หนังที่จะรีวิว
const createReview = async (req, res, next) => {
  try {
    const reviewData = req.body;
    const newReview = await reviewService.createReview(reviewData);
    res.status(201).json(newReview);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createReview,
};
