const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const AdminSchema = new mongoose.Schema({
  admin: {
    type: Boolean,
    default: true,
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
  modeOfStudy: {
    type: String,
    trim: true,
  },
  address: {
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
});
AdminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPass = await bcrypt.hash(this.confirmPass, 12);
  }
  next();
});

const Admin = mongoose.model("ADMIN", AdminSchema);
module.exports = Admin;
