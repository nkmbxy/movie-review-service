require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;
const user = require("./src/routes/user.route");
const movie = require("./src/routes/movie.route");
const review = require("./src/routes/review.route");
const spoil = require("./routes/spoil.route");
const genre = require("./routes/genre.route");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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

app.use("/movie", movie);
app.use("/spoil", spoil);
app.use("/genre", genre);
app.use("/review", review);
app.use("/user", user);
app.use("/favorite", favorite);
app.use("/comment", comment);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
