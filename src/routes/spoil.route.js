const express = require("express");
const spoilController = require("../controllers/spoil.controller");
const router = express.Router();

router.get("/:movieId", spoilController.getSpoil);

module.exports = router;
