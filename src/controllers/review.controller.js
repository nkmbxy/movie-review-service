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

//หนังเรื่องนั้น

//คนมาคอมเม้น

//สปอย
const getSpoil = async (req, res, next) => {
  try {
    const movieId = req.params.movieId;
    const spoil = await spoilService.getSpoilByMovieId(movieId);
    res.json({ success: true, spoil });
  } catch (error) {
    console.error("spoil.controller error getting spoil:", error);
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};
module.exports = {
  createReview,
  getSpoil,
};
