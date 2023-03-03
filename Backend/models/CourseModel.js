const mongoose = require("mongoose");
const CoursesSchema = new mongoose.Schema({
  courseTitle: {
    type: String,
    required: true,
  },
  coursePrice: {
    type: Number,
    required: true,
  },
  courseImage: {
    type: String,
    required: true,
  },
  student: {
    type: Array,
    default: [],
  },
  zipCode: {
    type: String,
  },
  teacher: {
    type: String,
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

// we are generating tokens
// StudentSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({ token: token });
//     // console.log(this.token);
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };

const Courses = mongoose.model("COURSES", CoursesSchema);
module.exports = Courses;
