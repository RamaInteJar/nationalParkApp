const express = require("express");
const app = express();
const exprssLayouts = require("express-ejs-layouts");
const authRoutes = require("./controller/authController");
const session = require("express-session");
const nationalParksRoutes = require("./controller/nationalParkController")

app.set("view engine", "ejs");
//MIDDLEWARES
app.use(express.static("public"));
app.use(exprssLayouts);
app.use(session({ secret: "someUniquStrings", cookie: { maxAge: 5000000 } }));
//Without express urlencoded we can not use form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(authRoutes);
//creating index page aka homepage
app.get("/", (req, res) => {
  res.render("Home.ejs");
});

app.use((req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  }
  next();
});

app.use("/parks", nationalParksRoutes)

const Port = 4800;
app.listen(Port, () => {
  console.log(`Hello from the server side`);
});
