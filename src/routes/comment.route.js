const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");
const verifyToken = require("../middlewares/auth.middleware");

router.post("/createComment", verifyToken, commentController.createComment);
router.post("/like/:commentId", verifyToken, commentController.likeComment);
router.get("/likeFavColor/:commentId", commentController.likeFavoriteColor);
router.post("/unlike/:commentId", verifyToken, commentController.unLikeComment);

module.exports = router;
