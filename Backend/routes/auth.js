const express = require("express");

const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Authenticate = require("../middleware/Authenticate");
var nodemailer = require('nodemailer')
const cloudinary = require('cloudinary')
require("../db/conn");
const fs = require('fs');
const Owner = require("../models/OwnerLoginModel");
const Security = require("../models/SecurityLoginModel");
const Courses = require("../models/CourseModel");
const Admin = require("../models/Admin");
const Event = require("../models/Event");
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
// ----------------------------------Admin Register-----------------------------------------------------
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const removeTmp = (path) =>{
  fs.unlink(path, err=>{
      if(err) throw err;
  })
}
router.post("/SignUp", async (req, res) => {
 try{
  const {
    name,
    email,
    phoneNumber,
    dob,
    address,
    zip,
    password,
    confirmPass,
  } = req.body.user;
  const { gender } = req.body;
  // const { image } = req.body.postImage.myFile;
  console.log(req.body.postImage.base64);
  console.log(gender);
  console.log(zip);
  console.log("This is the name in backend", gender);
  console.log(req.body);
  const owner = await Owner.findOne({ email });

  if (owner){
    res.status(200).send({ message: "User exists", success: false});
  } 
  
    const ownerUser = new Owner({
      name: name,
      email: email,
      mobile: phoneNumber,
      dob: dob,
      address: address,
      zip: zip,
      gender: gender,
      password: password,
      confirmPass: confirmPass,
      image: req.body.postImage.base64,
    });

    await ownerUser.save()
    res.status(201).send({ message: "Register Sucessfully", success: true });
  }
  catch(error){
    console.log(error);
    res
      .send(500)
      .send({ sucess: false, message: `Register Controller ${error.message}` });
  }
  }
);

// -----------------------Login Route--------------------------------------------------
router.post("/Login", async (req, res) => {
  try {
    const userLogin = await Owner.findOne({ email: req.body.email });
    if (!userLogin) {
      return res.status(200).send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, userLogin.password);
    if (!isMatch) {
      return res.status(200).json({
        error: "invalid Credentials... Email Or Pass",
        success: false,
      });
    }
    res.status(200).send({ message: "Login Sucessfull", success: true, userLogin });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
});

// -------------------------------------------Owner SignUp------------------------------------------------------------

router.post("/SecuritySignUp", async (req, res) => {
  const {
    name,
    email,
    phoneNumber,
    dob,
    address,
    zip,
    password,
    confirmPass,
  } = req.body.user;

  const { gender } = req.body;
  console.log("This is the name in backend", gender);

  const security = await Security.findOne({ email });
  console.log(security);

  if (security) res.status(400).send({ message: "User exists" });
  else {
    const securityUser = new Security({
      name: name,
      email: email,
      mobile: phoneNumber,
      dob: dob,
      address: address,
      zip: zip,
      gender: gender,
      password: password,
      confirmPass: confirmPass,
    });
    securityUser.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ message: "Sucessfully Registered" });
      }
    });
  }
});

// ---------------------------------------------security Login -------------------------------------------
/*
router.post("/Securitylogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the fields!!!" });
    }
    const SecurityLogin = await Security.findOne({ email: email });
    if (SecurityLogin) {
      const isMatch = await bcrypt.compare(password, SecurityLogin.password);
      if (!isMatch) {
        res.json({ message: "invalid Credentials..." });
      } else {
        res.status(200).send({ message: "Login Sucessfull", SecurityLogin });
      }
    } else {
      res.json({ message: "invalid Credentials..." });
    }
  } catch (err) {
    console.log(err);
  }
});*/
router.post("/Securitylogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the fields!!!" });
    }
    const SecurityLogin = await Security.findOne({ email: email });
    if (!SecurityLogin) {
      return res
        .status(200)
        .send({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(
      req.body.password,
      SecurityLogin.password
    );
    if (!isMatch) {
      return res.status(200).json({
        error: "invalid Credentials... Email Or Password",
        success: false,
      });
    }
    res
      .status(200)
      .send({ message: "Login Sucessfully..", success: true, SecurityLogin});
  } catch (err) {
    console.log(err);
  }
});

// =========================================================Admin Register==========================================================
router.post("/AdminRegister", async (req, res) => {
  const { name, email, phoneNumber, dob, address, password, confirmPass } =
    req.body.user;
  const { gender } = req.body;
  console.log(req.body);
  const admin = await Admin.findOne({ email });
  console.log(admin);

  if (admin) res.status(400).json({ message: "Admin exists" });
  else {
    const adminUser = new Admin({
      name: name,
      email: email,
      mobile: phoneNumber,
      dob: dob,
      address: address,
      gender: gender,
      password: password,
      confirmPass: confirmPass,
    });
    adminUser.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Sucessfully Registered" });
      }
    });
  }
});

// ===========================================================Admin Login =================================================
router.post("/Adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the fields!!!" });
    }
    const AdminLogin = await Admin.findOne({ email: email });
    if (!AdminLogin) {
      return res
        .status(200)
        .send({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(
      req.body.password,
      AdminLogin.password
    );
    if (!isMatch) {
      return res.status(200).json({
        error: "invalid Credentials... Email Or Password",
        success: false,
      });
    }
    res
      .status(200)
      .send({ message: "Login Sucessfully..", success: true, AdminLogin});
  } catch (err) {
    console.log(err);
  }
  // ==================================================================================================
});

// -----------------------------------------------------Location---------------------------------------------------------

router.post("/Loc", async (req, res) => {
  try {
    console.log("This is the location one");
    const { zip } = req.body;
    console.log(zip);
    const minimumLocation = zip - 1;
    const maximumLocation = zip + 1;

    const l = await Courses.find({ zipCode: zip });
    var data = [];

    for (var i = 0; i < l.length; i++) {
      var k = await Security.findById({ _id: l[i].teacher });
      data.push(k.name);
    }
    console.log(data.length);
    data.push(l);

    res.send(data);
  } catch (error) {
    console.log("This is to become a very comman error", error);
  }
});
// =================================Number of security==================================================
router.post("/NumberOfSecurity", async (req, res) => {
  try {
    console.log("This is to send the Number of Owner");
    const data = await Security.find();
    res.send(data);
  } catch (error) {
    console.log("There is no security found");
  }
});

// -------------------------------------------NumberOfOwner----------------------------------------------
router.post("/NumberOfOwner", async (req, res) => {
  try {
    console.log("This is to send the Number of Owner");
    const data = await Owner.find();
    res.send(data);
  } catch (error) {
    console.log("There is no admin found");
  }
});
///course_list

router.get("/course_list", async (req, res) => {
  try {
    const data = await Courses.find({});
    res.json({ list: data });
  } catch (error) {
    console.log("This is to become a very comman error", error);
  }
});

// ----------------------------------------------------TotalCourse---------------------------------------------------
router.post("/TotalCourses", async (req, res) => {
  try {
    console.log("This is to send the Number of teacher-Student");
    const data = await Courses.find();
    res.json({ data });
  } catch (error) {
    console.log("This is to become a very comman error", error);
  }
});


// ===========================================================Check-in====================================================================

router.post("/checkin", async (req, res) => {
  const keyValue = req.body;
  const data = await Security.findById({});
  console.log(data);
  res.send(data.name);
});


// ============================================================ Access the data from the Student about teacher =============================================
router.post("/", async (req, res) => {
  const { _id } = req.body;
  // console.log("This is the data in the req.body", _id);
  console.log(req.body);
  // const data = await Student.findByIdAndUpdate(_id, { payment: true }).then(
  const data = await Owner.findByIdAndUpdate(_id, {
    teacher_id: "63ae5719bd0e3d091cac84cb",
  }).then(res.send("Updated...."));
  // const teacherData = await Teacher.findById({ _id: data.teacher_id });
  // console.log(teacherData);
  // console.log("This is the data", data);
});


// =================================================TeacherStudent==============================================
router.post("/TeacherStudent", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const course = await Courses.find({ teacher: id });
  console.log(course.length);
  res.json({ course: course });
});

// ================================================ Taken Courses ====================================================================
router.post("/TakenCourses", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const data = await Owner.findById({ _id: id });
  res.json({ course: data.course });
});

// ===========================================Event Store =======================================================
router.post("/EventDetails", async (req, res) => {
  try{
    console.log(req.body);
    const { Eventname, EventDescription, startdate, enddate } = req.body;
  
    const data = await Event.findOne({ Eventname });
    if (data) {
      return res.status(400).send("Course Exist");
    } else {
      const newEvent = await new Event({
        Eventname,
        EventDescription,
        startdate,
        enddate,
      });
     await  newEvent.save();
    }
  
    res.send("Done");
  }
  catch{
    res.send("err")
  }
});

// ===============================================Event Display==============================================
router.get("/EventDisplay", async (req, res) => {
  try {
    const data = await Event.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
// ===================================================Notifications==============================================
router.post('/Notification', async(req, res) =>{
  const {name,email,sub,text} = req.body;
  console.log(name,email,sub,text)
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.Email,
      pass: process.env.Password
    },port:465,
    host:'smtp.gmail.com'
  });
  var mailOptions = {
    from: process.env.Email, 
    to:email,
    subject: sub,
    text: text
  };
  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send("done")
});

// ==============================================================
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// ==============================================================
router.post('/photo',async (req,res)=>{  
  console.log("photo adding")

  
  

 
  try {

    if(!req.files || Object.keys(req.files).length === 0)
    {
       return res.status(400).json({msg: 'No files were uploaded.'})
    }
  
  const file = req.files.file;
  console.log(file.size)
  if(file.size > 1024*1024) {
      removeTmp(file.tempFilePath)
      return res.status(400).json({msg: "Size too large"})
  }
 

  cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(err, result)=>{
      if(err) throw err;

      removeTmp(file.tempFilePath)
      

      res.json({public_id: result.public_id, url: result.secure_url})
  })


} catch (err) {
  return res.status(500).json({msg: err.message})
}
});
router.post('/destory',async function(req,res){  
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET
  })
  console.log("phot remove")
  const {public_id} = req.body;
  if(!public_id) return res.status(400).json({msg: 'No images Selected'})

  cloudinary.v2.uploader.destroy(public_id, async(err, result) =>{
      if(err) throw err;

      res.json({msg: "Deleted Image"})
  })

} catch (err) {
  return res.status(500).json({msg: err.message})
}

});

// ====================================================================================

router.get("/getCode",async(req,res)=>{
  client
      .verify
      .services(process.env.VERIFY_SERVICE_SID)
      .verifications
      .create({
          to: `+${req.query.phonenumber}`,
          channel: req.query.channel
      })
      .then(data => {
          res.status(200).send(data);
      })
});
// ====================================================================================
router.get("/verifyCode",async (req,res)=>{
  client
  .verify
  .services(process.env.VERIFY_SERVICE_SID)
  .verificationChecks
  .create({
      to: `+${req.query.phonenumber}`,
      code: req.query.code
  })
  .then(data => {
      res.status(200).send(data);
  }).catch(err=> console.log(err) )
})
// =====================================================================================
router.post("/Feedback",async(req,res)=>{
  res.send("ok");
})

module.exports = router;
