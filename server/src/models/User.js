import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Full Name
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Email Address
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // Password Hash
    passwordHash: {
      type: String,
      required: true,
    },

    // Mobile Number
    phoneNumber: {
      type: String,
      default: "",
    },

    // Profile Image
    profileImage: {
      type: String,
      default: "",
    },

    // User Role
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    // Verification Step
    verificationStep: {
      type: Number,
      default: 1,
    },

    // Account Status
    isActive: {
      type: Boolean,
      default: true,
    },

    // Email Verification
    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    // Last Login
    lastLogin: {
      type: Date,
    },

    // Password Reset OTP
    resetOtp: {
      type: String,
      default: "",
    },

    // OTP Expiry
    otpExpiry: {
      type: Date,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);