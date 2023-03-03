const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SecuritySchema = new mongoose.Schema({
  teacher: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    trim: true,
    required: true,
  },
  zip: {
    type: String,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  confirmPass: {
    type: String,
    trim: true,
    required: true,
  },
  payment: {
    type: Boolean,
    default: true,
  },
});

SecuritySchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPass = await bcrypt.hash(this.confirmPass, 12);
  }
  next();
});

const Security = mongoose.model("SECURITY", SecuritySchema);
module.exports = Security;
