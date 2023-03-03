const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const OwnerSchema = new mongoose.Schema({
  student: {
    type: Boolean,
    default: true,
  },
  teacher_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SECURITY",
    },
  ],
  course_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "COURSES",
    },
  ],
  course: {
    type: Array,
    default: [],
  },
  name: {
    type: String,
    trim: true,
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
    default: false,
  },
  image: {
    type: String,
    required: true,
  },
});

// We are hassing the password
OwnerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPass = await bcrypt.hash(this.confirmPass, 12);
  }
  next();
});

const Owner = mongoose.model("OWNER", OwnerSchema);
module.exports = Owner;
