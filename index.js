require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;
const user = require("./src/routes/user.route");
const movie = require("./src/routes/movie.route");
const review = require("./src/routes/review.route");
const genre = require("./src/routes/genre.route");
const favorite = require("./src/routes/favorite.route");
const comment = require("./src/routes/comment.route");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI, {
  dbName: process.env.DB_NAME,
  user: process.env.USER_DB,
  pass: process.env.PASS_DB,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const multerMid = multer({
  storage: multer.memoryStorage(),
});

app.use(multerMid.single("file"));
app.use("/movie", movie);
app.use("/genre", genre);
app.use("/review", review);
app.use("/user", user);
app.use("/favorite", favorite);
app.use("/comment", comment);

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   console.error(err.message, err.stack);
//   res.status(statusCode).json({ message: err.message });
//   return;
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
