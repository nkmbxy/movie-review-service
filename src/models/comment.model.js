const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    review_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
      required: true,
    },
    like_counter: {
      type: Number,
      default: 0,
    },
    comment_text: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
