const express = require("express");
var createError = require('http-errors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cookieParser = require('cookie-parser');
var path = require('path');
var logger = require('morgan');
const cors = require("cors");
const app = express();
const fs = require('fs');

const fileUpload  = require('express-fileupload');
app.use(fileUpload({useTempFiles:true}));
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const multer = require("multer");
dotenv.config({ path: "./config.env" });
const PORT = 4500;
require("./db/conn");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const Ownerifo = require("./models/OwnerLoginModel");

// Linking the router files so it can be easy later to use
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.json({ limit: "900MB" }));
app.use(express.urlencoded({ extended: true, limit: "900mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 1000000,
    limit: "900mb",
  })
);

// ===================================================Routes===========================================================

app.use(require("./routes/auth"));
// app.get("/CourseMaterial", (req, res) => {
//   res.download("../BoyAvtar.jpg");
// });
const admin = require("./routes/Admin");
app.use("/admin", admin);
// const chatting = require("./routes/Chatting");
// app.use("/Chatting", chatting);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`https://localhost:${PORT}`);
  } else {
    console.log(`err`);
  }
});
