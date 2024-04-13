const commentService = require("../services/comment.service");

async function createComment(req, res, next) {
  try {
    const { userId, reviewId, commentText } = req.body;
    const comment = await commentService.createComment(
      userId,
      reviewId,
      commentText
    );
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
}

async function likeComment(req, res, next) {
  try {
    const { commentId } = req.params;
    const updatedComment = await commentService.incrementLikeCount(commentId);
    res.status(200).json(updatedComment);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createComment,
  likeComment,
};
