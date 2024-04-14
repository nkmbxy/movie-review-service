const express = require("express");
const reviewController = require("../controllers/review.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

//หนังที่จะรีวิว
router.post("/createReview", reviewController.createReview);

//หนังเรื่องนั้น
router.get("/reviews/:id", reviewController.getReviewById);

//คนมาคอมเม้น
router.get("/comments/:commentId", reviewController.getCommentById);

//สปอย
router.get("/spoilers/:movieId", reviewController.getSpoilByMovieId);

module.exports = router;
