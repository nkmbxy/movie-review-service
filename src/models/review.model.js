const { ref } = require("firebase/storage");
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pseudonym: {
      type: String,
      required: true,
    },
    spoil_text: {
      type: String,
      required: true,
    },
    actor: {
      type: String,
    },
    director: {
      type: String,
    },
    score: {
      type: Number,
      required: true,
    },
    happy: {
      type: Number,
      required: true,
    },
    drama: {
      type: Number,
      required: true,
    },
    joke: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
