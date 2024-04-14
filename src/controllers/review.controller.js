const Review = require("../models/review.model");
const reviewService = require("../services/review.service");
const movieService = require("../services/movie.service");
const mongoose = require("mongoose");
const { uploadFileFirebase } = require("../utils/uploadFile.utils");

//หนังที่จะรีวิว
const createReview = async (req, res) => {
  try {
    const {
      user_id,
      title,
      synopsis,
      pseudonym,
      spoil_text,
      actor,
      director,
      score,
      happy,
      drama,
      joke,
      genre,
      country,
    } = req.body;
    const file = req.file;
    const newReview = new Review({
      user_id,
      title,
      synopsis,
      pseudonym,
      spoil_text,
      actor,
      director,
      score,
      happy,
      drama,
      joke,
      genre,
      country,
      image: await uploadFileFirebase(file),
    });

    await newReview.save();

    res.status(201).json({ success: true, data: newReview });
  } catch (err) {
    console.log(err);
  }
};

//หนังเรื่องนั้น
const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await reviewService.getReviewById(id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({
      title: review.title,
      synopsis: review.pseudonym,
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
    console.log(err);
  }
};

//คนมาคอมเม้น
const getCommentById = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await reviewService.getCommentById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json(comment);
  } catch (error) {
    console.log(err);
  }
};

//สปอย
const getSpoilByMovieId = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const spoil = await reviewService.getSpoilByMovieId(movieId);
    res.json({ success: true, spoil });
  } catch (error) {
    console.error("review.controller error getting spoil:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createReview,
  getReviewById,
  getCommentById,
  getSpoilByMovieId,
};
