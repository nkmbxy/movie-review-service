const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");

router.post("/createComment", commentController.createComment);
router.post("/like/:commentId", commentController.likeComment);
router.get("/likeFavColor/:commentId", commentController.likeFavoriteColor);
router.post("/unlike/:commentId", commentController.unLikeComment);

module.exports = router;
