const Review = require("../models/review.model");
const Movie = require("../models/movie.model");
const Genre = require("../models/genre.model");
const { uploadFileFirebase } = require("../utils/uploadFile.utils");
const jwt = require("jsonwebtoken");

//หนังที่จะรีวิว
const createReview = async (req, res) => {
  try {
    const {
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
      genre_id,
      country,
    } = req.body;
    const file = req.file;
    const token = req.cookies.token;
    const validToken = jwt.verify(token, "HotTwoHot");

    if (!validToken) {
      return res.status(400).send("Invalid Token");
    }

    if (!file) {
      return res.status(400).send("No file uploaded");
    }

    const fileUrl = await uploadFileFirebase(file);

    const movie = new Movie({
      title,
      synopsis,
      actor,
      score,
      director,
      genre_id,
      country,
      image: fileUrl,
    });

    const review = new Review({
      user_id: validToken.UserID,
      movie_id: movie._id,
      pseudonym,
      spoil_text,
      actor,
      director,
      score,
      happy,
      drama,
      joke,
      country,
    });

    const findGenre = await Genre.findById(genre_id);
    if (!findGenre) {
      return res.status(404).send("Genre not found");
    }
    await findGenre?.updateOne({ $push: { movie_id: movie._id } });

    await movie.save();
    await review.save();
    res.json({ message: "Review created" });
  } catch (error) {
    console.log(error.message);
  }
};

// หนังเรื่องนั้น
const getReviewById = async (req, res) => {
  try {
    const { review_id } = req.params;
    const review = await Review.findById(review_id)
      .populate({ path: "movie_id", populate: { path: "genre_id" } })
      .populate({ path: "comments", populate: { path: "user_id" } })
      .populate("user_id");
    if (!review) {
      return res.status(404).send("Not Found");
    }
    res.status(200).send(review);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createReview,
  getReviewById,
};
