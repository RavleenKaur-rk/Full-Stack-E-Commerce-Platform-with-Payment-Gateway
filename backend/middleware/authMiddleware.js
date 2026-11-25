const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (
    !authorization ||
    !authorization.startsWith("Bearer ")
  ) {
    return res.status(401).json({
      success: false,
      message: "Authentication required"
    });
  }

  let decoded;

  try {
    const token = authorization.split(" ")[1];

    decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: ["HS256"] }
    );
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }

  try {
    const user = await User.findById(decoded.id)
      .select("-password");

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: "User not authorized"
      });
    }

    req.user = user;

    next();

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      success: false,
      message: "Authentication failed"
    });
  }
};

module.exports = protect;