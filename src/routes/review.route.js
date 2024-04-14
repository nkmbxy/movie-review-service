const express = require("express");
const reviewController = require("../controllers/review.controller");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");

//หนังที่จะรีวิว
router.post("/createReview", auth, reviewController.createReview);

//หนังเรื่องนั้น
router.get("/reviews/:id", reviewController.getReviewById);

//คนมาคอมเม้น
router.get("/comments/:commentId", reviewController.getCommentById);

//สปอย
router.get("/spoilers/:movieId", reviewController.getSpoilByMovieId);

module.exports = router;
