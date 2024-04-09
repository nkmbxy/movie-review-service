const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
  {
    genre_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    movies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },
  { versionKey: false }
);

const Genre = mongoose.model("Genre", GenreSchema);

module.exports = Genre;
