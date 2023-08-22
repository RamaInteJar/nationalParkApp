//using express router to attach routes and export them
const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.get("/login", (req, res) => {
    res.render("auth/login");
  });

  router.post("/login", async(req, res) => {
    console.log(req.body);
    let userLogin = await User.findOne({username: req.body.username})
    if(userLogin){
      if(userLogin.password === req.body.password){
          res.send(`Welcome`)
      }else{
          res.send(`incorrect password`)
      }
    }
  });

  router.get("/signup", (req, res) => {
    res.render("auth/signup");
  });

  router.post("/signup", async (req, res) => {
    console.log(req.body);
    if (req.body.username && req.body.password) {
      let newUser = await User.create(req.body);
      res.send(newUser)
    }
   
  });

module.exports = router