//bring in mongoose that connected to our database 
const mongoose = require('../dabase/connection')

//set up user schema

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
})


//set up model using schema

const User = new mongoose.model("user", userSchema)
module.exports = User