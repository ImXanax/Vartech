const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const csurf = require("tiny-csrf");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const flash = require("connect-flash");

const Product = require("./models/productSchema");
const userSchema = require("./models/userSchema");

const app = express();
const port = process.env.PORT || 5500;
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/shop", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`🟢 Mongo Connected`);
  })
  .catch(() => {
    console.error();
  });
require("./config/passport");
require('dotenv').config()
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("cookie-parser-secret"));
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(
  csurf(
    process.env.CSRF, // secret -- must be 32 bits or chars in length
    ["POST"], // the request methods we want CSRF protection for
    [], // any URLs we want to exclude, either as strings or regexp
    [] // any requests from here will not see the token and will not generate a new one
  )
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));

app.get("/", (req, res) => {
  Product.find((err, p) => {
    res.render("index", { products: p });
  });
});

app.get("/config", (req, res) => {
  res.render("config");
});

app.get("/user/signup", (req, res) => {
  const messages = req.flash("error");
  console.log(`messages: ${messages}`);
  const csrfToken = req.csrfToken();
  res.render("user/signup", {
    csrfToken: csrfToken,
    messages: messages,
    hasErrors: messages.length > 0,
  });
});

app.get("/user/signin", (req, res) => {
  res.render("user/signin");
});

app.post(
  "/user/signup",
  passport.authenticate("local.signup", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/signup",
    failureFlash: true,
  })
);

app.get("/user/profile", (req, res) => {
  res.render("user/profile");
});
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(process.env.PORT || 5500, () => {
  console.log(`🟢 Server running http://localhost:${port}`);
});
