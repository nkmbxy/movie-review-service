const userService = require("../services/user.service");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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

    const payload = jwt.sign({ UserID: userRegister._id }, "HotTwoHot");

    res.cookie("token", payload, { httpOnly: true });
    res.status(200).json({
      data: userRegister,
    });
  } catch (error) {
    console.error(`register.controller error while creating user`, err.message);
    res.status(500).json({ data: err.message });
  }
}

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
    console.log(user._id);
    const payload = jwt.sign({ UserID: user._id }, "HotTwoHot");
    res.cookie("token", payload, { httpOnly: true });
    res.status(200).json({
      data: "login success",
    });
  } catch (error) {
    console.log(`register.controller error while creating user`, err.message);
  }
}

async function logout(req, res) {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout Success" });
  } catch (error) {
    console.log(error.message);
  }
}

const userByUserID = async (req, res) => {
  try {
    const token = req.cookies.token;
    const validToken = jwt.verify(token, "HotTwoHot");

    if (!validToken) {
      return res.status(400).send("Invalid Token");
    }

    const user = await User.findById(validToken.UserID);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  userByUserID,
};
