const commentService = require("../services/comment.service");
const Review = require("../models/review.model");
const Comment = require("../models/comment.model");
const jwt = require("jsonwebtoken");

async function createComment(req, res) {
  try {
    const { review_id, comment_text } = req.body;
    const token = req.cookies.token;
    const validToken = jwt.verify(token, "HotTwoHot");

    if (!validToken) {
      return res.status(400).send("Invalid Token");
    }

    const newComment = new Comment({
      user_id: validToken.UserID,
      review_id,
      comment_text,
    });
    await newComment.save();

    const findReview = await Review.findById(review_id);
    if (!findReview) {
      return res.status(404).send("Post not found");
    }
    await findReview?.updateOne({ $push: { comments: newComment._id } });
    res.status(201).send("Comment created successfully!");
  } catch (error) {
    console.log(error.message);
  }
}

const likeComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const updatedComment = await commentService.incrementLikeCount(commentId);
    res.status(200).json(updatedComment);
  } catch (error) {}
};

module.exports = {
  createComment,
  likeComment,
};
