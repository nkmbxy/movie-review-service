const commentService = require("../services/comment.service");
const Review = require("../models/review.model");
const Comment = require("../models/comment.model");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

async function createComment(req, res, next) {
  try {
    const { review_id, comment_text } = req.body;

    const newComment = new Comment({
      user_id: req.user.UserID,
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
    next(error);
  }
}

const likeComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const likeIncrement = req.body.like_counter || 0;
    const updatedComment = await commentService.incrementLikeCount(
      commentId,
      likeIncrement
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const unLikeComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const likeDecrement = req.body.like_counter || 0;
    const updatedComment = await commentService.decrementLikeCount(
      commentId,
      likeDecrement
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

async function likeFavoriteColor(req, res) {
  try {
    const { commentId } = req.params;
    const token = req.cookies.token;
    const validToken = jwt.verify(token, "HotTwoHot");

    if (!validToken) {
      return res.status(400).send("Invalid Token");
    }

    const findComment = await Favorite.findOne({
      user_id: new ObjectId(validToken.UserID),
      commentId: new ObjectId(commentId),
    });

    if (findComment) {
      res.status(200).send({ status: true });
    } else {
      res.status(200).send({ status: false });
    }
  } catch (error) {}
}

module.exports = {
  createComment,
  likeComment,
  likeFavoriteColor,
  unLikeComment,
};
