const express = require("express");
const router = express.Router();
require("../db/conn");
const Student = require("../models/OwnerLoginModel");
const Teacher = require("../models/SecurityLoginModel");
const Courses = require("../models/CourseModel");

// router.get("/about", (req, res) => {
//   res.send("This is the starting router");
// });

// // ------------------------------------------------ADMIN ADDING COURSES---------------------------------------------------------
// router.post("/AddCourse", async (req, res) => {
//   const { courseTitle, coursePrice } = req.body;
//   console.log(
//     "This is the courseTitle and coursePrice",
//     courseTitle,
//     coursePrice
//   );
//   const data = await Courses.findOne({ courseTitle });
//   console.log(data);
//   if (data) {
//     return res.status(400).send({ message: "Course Exist" });
//   } else {
//     const newCourse = new Courses({
//       courseTitle: courseTitle,
//       coursePrice: coursePrice,
//     });
//     newCourse.save((err) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send({ message: "Course Added Sucessfully" });
//       }
//     });
//   }
// });

router.route("/").get((req, res) => {
  res.json("mf");
});

// router.route("/bitches").get((req, res) => {
//   res.json("Raj madharchods");
// });
module.exports = router;
