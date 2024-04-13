const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");

router.get("/search", movieController.searchByTitle); //ค้นหาหน้าโฮม
router.get("/random", movieController.getRandomMovies); //สุ่มโชว์ 3 เรื่องหน้าโฮม
router.get("/country/:country", movieController.getMoviesByCountry); //จัดหนังตามประเทศ หน้าโฮม
router.get("/details/:id", movieController.getDetails); //เมาส์โฮเว่อร์แล้วโชว์หลายละเอียด

module.exports = router;
