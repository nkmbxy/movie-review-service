const Comment = require("../models/comment.model");

async function createComment(userId, reviewId, commentText) {
  const comment = new Comment({
    user_id: userId,
    review_id: reviewId,
    comment_text: commentText,
  });
  await comment.save();
  return comment;
}

async function incrementLikeCount(commentId) {
  const comment = await Comment.findByIdAndUpdate(
    commentId,
    { $inc: { like_counter: 1 } },
    { new: true }
  );
  return comment;
}

module.exports = {
  createComment,
  incrementLikeCount,
};
