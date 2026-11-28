const cookieParser = require("cookie-parser");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(helmet());

app.use(
  cors({
    origin:
      process.env.CLIENT_URL || "http://localhost:5173",
      credentials: true
  })
);
app.use(cookieParser());

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to VELORA API"
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "VELORA Backend is running!",
    timestamp: new Date().toISOString()
  });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found"
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error(error.message);

  res.status(error.status === 400 ? 400 : 500).json({
    success: false,
    message:
      error.status === 400
        ? "Invalid request"
        : "Internal server error"
  });
});

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is missing");
    process.exit(1);
  }

  await connectDB();

  app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log("VELORA Backend Server Started");
    console.log(`Server: http://localhost:${PORT}`);
    console.log("--------------------------------");
  });
};

startServer();