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
const getReviewById = async (req, res, next) => {
  try {
    const { id } = req.params; // Assuming the route parameter is named 'id'
    const review = await reviewService.getReviewById(id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({
      title: review.title,
      pseudonym: review.pseudonym,
      spoil_text: review.spoil_text,
      actor: review.actor,
      director: review.director,
      score: review.score,
      happy: review.happy,
      drama: review.drama,
      joke: review.joke,
      genre: review.genre,
    });
  } catch (error) {
    next(error);
  }
};

//คนมาคอมเม้น
const getCommentById = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const comment = await reviewService.getCommentById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

//สปอย
const getSpoilByMovieId = async (req, res, next) => {
  try {
    const movieId = req.params.movieId;
    const spoil = await reviewService.getSpoilByMovieId(movieId);
    res.json({ success: true, spoil });
  } catch (error) {
    console.error("review.controller error getting spoil:", error);
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

module.exports = {
  createReview,
  getReviewById,
  getCommentById,
  getSpoilByMovieId,
};
