const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

async function register(req, res, next) {
  try {
    console.log("start register.controller  req body :", req?.body);

    const { email, password, username } = req?.body;

    if (!(email && password && username)) {
      return res.status(400).json({
        data: "All input is required",
      });
    }

    const user = await userService.findByEmail(email);
    if (user) {
      return res.status(409).json({
        data: "User already exists. Please login.",
      });
    }
    const userRegister = await userService.register(email, password, username);
    res.status(200).json({
      data: userRegister,
    });
  } catch (err) {
    console.error(`register.controller error while creating user`, err.message);
    res.status(500).json({ data: err.message });
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req?.body;

    if (!(email && password)) {
      return res.status(400).json({
        data: "All input is required",
      });
    }

    const user = await userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const userLogin = await userService.login(user);
      const payload = jwt.sign({ UserID: user._id }, "HotTwoHot", {
        algorithm: "HS256",
      });
      res.cookie("token", payload, { httpOnly: true });
      res.status(200).json({ message: "Login Success", payload: payload });
    } else {
      res.status(400).json({
        data: "user not found please try again",
      });
    }
  } catch (err) {
    console.error(`register.controller error while creating user`, err.message);
    res.status(500).json({ data: err.message });
    next(err);
  }
}

module.exports = {
  register,
  login,
};
