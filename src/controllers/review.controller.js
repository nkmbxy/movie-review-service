const Review = require("../models/review.model");
const Movie = require("../models/movie.model");
const Genre = require("../models/genre.model");
const { uploadFileFirebase } = require("../utils/uploadFile.utils");
const jwt = require("jsonwebtoken");
const { getMoviesSortByGenre } = require("../services/genre.service");

//หนังที่จะรีวิว ได้
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
    movie.review_id = review._id;
    const findGenre = await Genre.findById(genre_id);
    if (!findGenre) {
      return res.status(404).send("Genre not found");
    }
    await findGenre?.updateOne({ $push: { movie_id: movie._id } });

    await movie.save();
    await review.save();
    res.json({ message: "Review create" });
  } catch (error) {
    console.log(error.message);
  }
};

// หนังเรื่องนั้น ได้
const getReviewById = async (req, res) => {
  try {
    const { review_id } = req.params;
    const review = await Review.findById(review_id)
      .populate({ path: "movie_id", populate: { path: "genre_id" } })
      .populate({
        path: "comments",
        populate: { path: "user_id" },
        options: { sort: { createdAt: -1 } },
      })
      .populate("user_id");
    const movies = await Genre.findOne({
      genre: review?.movie_id?.genre_id?.genre,
    }).populate("movie_id");

    let moviesGenre = [];

    movies?.movie_id?.forEach((item) => {
      moviesGenre.push(item.image);
    });

    if (!review) {
      return res.status(404).send("Not Found");
    }
    res.status(200).send({ review, moviesGenre });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createReview,
  getReviewById,
};
