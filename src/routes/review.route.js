const express = require("express");
const reviewController = require("../controllers/review.controller");
const router = express.Router();
const verifyToken = require("../middlewares/auth.middleware");

router.post("/createReview", verifyToken, reviewController.createReview);
router.get("/getReviewByID/:review_id", reviewController.getReviewById);

module.exports = router;
