const express = require("express");
const rateLimit = require("express-rate-limit");

const {
  registerUser,
  loginUser,
  getProfile
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const router = express.Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many attempts. Please try again later."
  }
});

router.post("/register", authLimiter, registerUser);

router.post("/login", authLimiter, loginUser);

router.get("/profile", protect, getProfile);

router.get("/admin-check", protect, adminOnly, (req, res) => {
  res.json({
    success: true,
    message: "Admin access granted"
  });
});

module.exports = router;