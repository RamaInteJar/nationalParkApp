//using express router to attach routes and export them
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt")

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  //We should hash password before user.create()
  let userLogin = await User.findOne({ username: req.body.username });
  if (userLogin) {
    if (userLogin.password === req.body.password) {
      res.send(`Welcome`);
    } else {
      res.send(`incorrect password`);
    }
  }
});

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res) => {
  if (req.body.username && req.body.password) {
    let plainTextPassword = req.body.password;
    bcrypt.hash(plainTextPassword, 10, async(err, hashedPassword)=>{
    req.body.password = hashedPassword;
    let newUser = await User.create(req.body);
    res.send(newUser);
  })
  }
});

module.exports = router;
