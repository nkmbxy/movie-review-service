const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    movie_id: [],
  },
  { versionKey: false }
);

const Genre = mongoose.model("Genre", GenreSchema);

module.exports = Genre;
