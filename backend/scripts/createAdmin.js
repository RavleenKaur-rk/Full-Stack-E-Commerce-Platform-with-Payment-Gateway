require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const User = require("../models/User");

const createAdmin = async () => {
  try {
    const name = process.env.ADMIN_NAME;
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!name || !email || !password) {
      throw new Error("Admin credentials are missing");
    }

    if (
      password.length < 12 ||
      Buffer.byteLength(password, "utf8") > 72
    ) {
      throw new Error(
        "Admin password must have at least 12 characters and at most 72 bytes"
      );
    }

    await connectDB();

    const existingUser = await User.findOne({
      email: email.trim().toLowerCase()
    });

    if (existingUser) {
      console.log("Email already registered. No changes made.");
      return;
    }

    const admin = await User.create({
      name,
      email: email.trim().toLowerCase(),
      password,
      role: "admin"
    });

    console.log("Admin created successfully!");
    console.log("Email:", admin.email);
    console.log("Role:", admin.role);

  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;

  } finally {
    await mongoose.disconnect();
  }
};

createAdmin();