const express = require("express")
const app = express()
const exprssLayouts = require("express-ejs-layouts")

app.set("view engine", "ejs")
//MIDDLEWARES
app.use(express.static("public"))
app.use(exprssLayouts)

//Without express urlencoded we can not use form data
app.use(express.urlencoded({extended: true}))

//creating index page aka homepage
app.get('/', (req, res)=>{
    res.render("Home.ejs")
})
const Port = 4000
app.listen(Port, ()=>{
 console.log(`Hello from the server side`);
})