const userService = require("../services/user.service");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//ได้
async function register(req, res) {
  try {
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
  }
}

//ได้
async function login(req, res) {
  try {
    const { email, password } = req?.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        data: "User not found. Please register.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        data: "Invalid credentials",
      });
    }
    const payload = jwt.sign({ UserID: user._id }, "HotTwoHot", {
      algorithm: "HS256",
    });
    res.status(200).header("x-auth-token", payload).json({
      data: "login success",
    });
  } catch (err) {
    console.log(`register.controller error while creating user`, err.message);
  }
}

module.exports = {
  register,
  login,
};
