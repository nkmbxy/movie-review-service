const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const bearerHeader = req?.headers["authorization"];
    if (!bearerHeader) {
      return res.json({
        data: "a token is required for authentication",
        status: 401,
      });
    }
    const bearer = bearerHeader.split(" ");
    if (bearer.length !== 2 || bearer[0] !== "Bearer") {
      return res.status(401).json({
        data: "Malformed token",
        status: 401,
      });
    }
    const bearerToken = bearer[1];
    const tokenDecoded = jwt.verify(bearerToken, "HotTwoHot");
    req.user = tokenDecoded;
  } catch (error) {
    console.log(error);
    return res.json({ data: "invalid token", status: 401 });
  }
  return next();
};

module.exports = verifyToken;
