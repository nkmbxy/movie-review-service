const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  } catch {
    return res.json({ data: "invalid token", status: 401 });
  }
  return next();
};

module.exports = verifyToken;
