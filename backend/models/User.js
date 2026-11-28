const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },

    password: {
      type: String,
      required: function () {
        return this.authProvider === "local";
      },
      minlength: 8,
      select: false
    },

    phone: {
      type: String,
      trim: true,
      default: ""
    },

    authProvider: {
      type: String,
      enum: ["local", "google", "facebook"],
      default: "local"
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true
    },

    facebookId: {
      type: String,
      unique: true,
      sparse: true
    },

    profileImage: {
      type: String,
      default: ""
    },

    isEmailVerified: {
      type: Boolean,
      default: false
    },

    isPhoneVerified: {
      type: Boolean,
      default: false
    },

    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer"
    },

    isActive: {
      type: Boolean,
      default: true
    },

    lastLogin: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

// Hash password before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password") || !this.password) {
    return;
  }

  if (Buffer.byteLength(this.password, "utf8") > 72) {
    throw new Error("Password exceeds maximum allowed length");
  }

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare login password
userSchema.methods.comparePassword = async function (
  enteredPassword
) {
  if (!this.password) {
    return false;
  }

  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);