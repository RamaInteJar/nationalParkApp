const express = require("express");
const app = express();
const exprssLayouts = require("express-ejs-layouts");
const authRoutes =require("./controller/authController")


app.set("view engine", "ejs");
//MIDDLEWARES
app.use(express.static("public"));
app.use(exprssLayouts);

//Without express urlencoded we can not use form data
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes)

//creating index page aka homepage
app.get("/", (req, res) => {
  res.render("Home.ejs");
});


const Port = 4800;
app.listen(Port, () => {
  console.log(`Hello from the server side`);
});
