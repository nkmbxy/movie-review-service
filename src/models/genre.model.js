const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
  },
  { versionKey: false }
);

const Genre = mongoose.model("Genre", GenreSchema);

module.exports = Genre;
