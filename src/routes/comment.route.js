const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/createComment", auth, commentController.createComment);
router.post("/like/:commentId", auth, commentController.likeComment);

module.exports = router;
