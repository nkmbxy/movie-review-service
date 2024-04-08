const mongoose = require("mongoose");

const spoilSchema = new mongoose.Schema(
  {
    spoil_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    spoil_text: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
  },
  { timestamps: true }
);

const Spoil = mongoose.model("Spoil", spoilSchema);

module.exports = Spoil;
