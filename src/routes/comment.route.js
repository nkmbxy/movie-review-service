const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");

router.post("/createComment", commentController.createComment);
router.post("/like/:commentId", commentController.likeComment);

module.exports = router;
