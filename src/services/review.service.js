const Review = require("../models/review.model");

//หนังที่จะรีวิว
async function create(review, options = {}) {
  try {
    console.log(
      "start review.service create review:",
      JSON.stringify(review, null, 2)
    );
    const session = options.session || null;

    const reviewModel = new Review(review);
    await reviewModel.save({ session });

    console.log("save review successfully");

    return;
  } catch (error) {
    console.error("review.service error while creating review:", error);
    throw error;
  }
}

//หน้ารีวิวหนังเรื่องนั้น

//สปอย
const getSpoilByMovieId = async (movieId, session = null) => {
  try {
    const spoil = await Spoil.findOne({ movie_id: movieId }).session(session);
    return spoil;
  } catch (error) {
    console.error("spoil.service error getting spoil by movieId:", error);
    throw error;
  }
};

module.exports = {
  create,
  getSpoilByMovieId,
};
