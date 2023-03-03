const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const EventSchema = new mongoose.Schema({
  Eventname: {
    type: String,
    trim: true,
    required: true,
  },
  EventDescription: {
    type: String,
    required: true,
  },
  startdate: {
    type: Date,
    require: true,
  },
  enddate: {
    type: Date,
    required: true,
  },
});

// We are hassing the password
// StudentSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//     this.confirmPass = await bcrypt.hash(this.confirmPass, 12);
//   }
//   next();
// });

const Event = mongoose.model("EVENT", EventSchema);
module.exports = Event;