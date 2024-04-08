const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    penname: {
      type: String,
      required: true,
    },
    pseudonym: {
      type: String,
    },
    spoil: {
      type: String,
    },
    actor: {
      type: String,
    },
    director: {
      type: String,
    },
    rate: {
      type: Number,
      required: true,
    },
    funny: {
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
    genre: {
      type: [String],
      required: true,
    },
    country: {
      type: [String],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
