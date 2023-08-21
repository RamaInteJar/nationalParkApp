//require mongoose and tell it which database to connect to
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ramahawai87:M27vALXu6CVZlJS4@cluster0.n2cex8l.mongodb.net/nationalParkApp')

mongoose.connection.on("connected", ()=>{
    console.log(`MongoDB IS CONNECTED`);
})

mongoose.connection.on('error',  err=>{
    console.log('ERROR', err);
})

module.exports = mongoose;