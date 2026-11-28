const mongoose = require("mongoose");

const otpVerificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    destination: {
      type: String,
      required: true,
      trim: true
    },

    method: {
      type: String,
      enum: ["email", "sms"],
      required: true
    },

    purpose: {
      type: String,
      enum: ["signup", "login", "reset-password"],
      required: true
    },

    otpHash: {
      type: String,
      select: false
    },

    providerReference: {
      type: String,
      select: false
    },

    attempts: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },

    isUsed: {
      type: Boolean,
      default: false
    },

    lastSentAt: {
      type: Date,
      default: Date.now
    },

    expiresAt: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Automatically remove expired OTP records
otpVerificationSchema.index(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 }
);

// Find verification records efficiently
otpVerificationSchema.index({
  userId: 1,
  purpose: 1,
  isUsed: 1
});

module.exports = mongoose.model(
  "OtpVerification",
  otpVerificationSchema
);