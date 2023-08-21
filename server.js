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

app.get('/login', (req, res)=>{
    res.render("auth/login")
})
app.post('/login', (req, res)=>{
    console.log(req.body);
    res.send(req.body)
})
app.get('/signup', (req, res)=>{
    res.render("auth/signup")
})
app.post('/signup', (req, res)=>{
    console.log(req.body);
    res.send(req.body)
})
const Port = 4000
app.listen(Port, ()=>{
 console.log(`Hello from the server side`);
})