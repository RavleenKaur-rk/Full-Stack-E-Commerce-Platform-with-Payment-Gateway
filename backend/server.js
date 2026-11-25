require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const connectDB = require("./config/db");

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin:
      process.env.CLIENT_URL || "http://localhost:5173"
  })
);

// Body parser
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

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

const PORT = process.env.PORT || 5001;

// Start server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log("VELORA Backend Server Started");
    console.log(`Server: http://localhost:${PORT}`);
    console.log("--------------------------------");
  });
};

startServer();