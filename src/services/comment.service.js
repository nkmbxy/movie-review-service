const Comment = require("../models/comment.model");

async function createComment(commentData) {
  try {
    console.log(
      "start comment.service create comment:",
      JSON.stringify(commentData, null, 2)
    );
    console.log("save comment successfully");
    return { message: "Comment simulated as saved", data: commentData };
  } catch (error) {
    console.error("comment.service error while creating comment:", error);
  }
}

async function incrementLikeCount(commentId, likeIncrement) {
  const comment = await Comment.findByIdAndUpdate(
    commentId,
    { $inc: { like_counter: likeIncrement } },
    { new: true }
  );
  return comment;
}

async function decrementLikeCount(commentId, likeDecrement) {
  const comment = Comment.findByIdAndUpdate(
    commentId,
    { $inc: { like_counter: -likeDecrement } },
    { new: true }
  );
  return comment;
}

module.exports = {
  createComment,
  incrementLikeCount,
  decrementLikeCount,
};
