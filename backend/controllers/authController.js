const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// Register customer
const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required"
      });
    }

    if (
      name.trim().length < 2 ||
      name.trim().length > 100
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid name"
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email"
      });
    }

    if (
      password.length < 8 ||
      Buffer.byteLength(password, "utf8") > 72
    ) {
      return res.status(400).json({
        success: false,
        message: "Password must have at least 8 characters and at most 72 bytes"
      });
    }

    const existingUser = await User.findOne({
      email: normalizedEmail
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered"
      });
    }

    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password,
      phone: typeof phone === "string" ? phone.trim() : "",
      role: "customer"
    });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered"
      });
    }

    console.error(error.message);

    res.status(500).json({
      success: false,
      message: "Registration failed"
    });
  }
};

// Login customer or admin
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password ||
      Buffer.byteLength(password, "utf8") > 72
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid email and password are required"
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase()
    }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Account has been disabled"
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      success: false,
      message: "Login failed"
    });
  }
};

// Get logged-in user profile
const getProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user
  });
};

module.exports = {
  registerUser,
  loginUser,
  getProfile
};