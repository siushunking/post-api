const express = require('express')
const User = require('../model/index').userModel
const router = express.Router()
const jwt = require("jsonwebtoken")

router.post("/signup", async (req,res)=>{

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist){
      return res.status(400).send("Email has already been registered.");
    }
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      });

      try {
        const savedUser = await newUser.save();
        res.status(200).send({
          msg: "success",
          savedObject: savedUser,
        });
      } catch (err) {
        res.status(400).send("User not saved.");
      }
    
})

router.post("/login", (req, res) => {
  
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) {
        res.status(400).send(err);
      }
      if (!user) {
        res.status(401).send("User not found.");
      } else {
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (err) return res.status(400).send(err);
          if (isMatch) {
            const tokenObject = { _id: user._id, email: user.email };
            const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
            res.send({ success: true, token: "JWT " + token, user });
          } else {
            res.status(401).send("Wrong password.");
          }
        });
      }
    });
  });

module.exports = router