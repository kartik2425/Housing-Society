const mongoose = require("mongoose");
// const DB = process.env.DATABASE;
const DB = "mongodb://localhost:27017/HousingSociety";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log(`DB Connected Sucessfully`);
  })
  .catch((err) => {
    console.log(`${err}`);
  });

