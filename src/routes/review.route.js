const express = require("express");
const reviewController = require("../controllers/review.controller");
const router = express.Router();
const verifyToken = require("../middlewares/auth.middleware");

//หนังที่จะรีวิว
router.post("/createReview", verifyToken, reviewController.createReview);

// หนังเรื่องนั้น
router.get("/getReviewByID/:review_id", reviewController.getReviewById);

module.exports = router;
