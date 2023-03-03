// const jwt = require("jsonwebtoken");
// const TeacherUser = require("../models/TeacherLoginModel");
// const TeacherAuthenticate = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwtoken;
//     const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
//     const rootUser = await TeacherUser.findOne({
//       _id: verifyToken._id,
//       "tokens.token": token,
//     });
//     if (!rootUser) {
//       throw new Error("User not found");
//     }
//     req.token = token;
//     req.token = rootUser;
//     req.userId = rootUser._id;

//     next();
//   } catch (error) {
//     res.status(401).send("Unauthorized:No token provided..");
//     console.log(error);
//   }
// };

// module.exports = TeacherAuthenticate;
