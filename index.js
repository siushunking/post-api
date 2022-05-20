// 匯入 必要function
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");// 解析json檔
const userRoute = require("./routes").user;
const postRoute = require("./routes").post;
require('dotenv').config()
const session = require('express-session')
const passport = require("passport");
require("./config/passport")(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/post",passport.authenticate('jwt',{session: false}), postRoute);
app.use("/api/user", userRoute)

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to Mongo Altas");
  })
  .catch((e) => {
    console.log(e);
  });


app.get("/", (req, res) =>{
    res.send("this is homepage.")

});

app.listen(8080, () =>{
    console.log("server is runiing")
})