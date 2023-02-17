const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const csurf = require("tiny-csrf");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const flash = require("connect-flash");
const { check, validationResult } = require("express-validator");

const Product = require("./models/productSchema");
const userSchema = require("./models/userSchema");
require("./config/passport");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5500;
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
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
  const csrfToken = req.csrfToken();
  res.render("user/signup", {
    csrfToken: csrfToken,
    messages: messages,
    hasErrors: messages.length > 0,
  });
});

app.post(
  "/user/signup",
  [
    check("email", "Invalid E-mail")
      .not()
      .isEmpty()
      .isEmail()
      .normalizeEmail()
      .withMessage("Invalid E-mail Address"),
    check("password", "Invalid password")
      .not()
      .isEmpty()
      .isLength({ min: 4 })
      .withMessage("Password Must Be At Least 5 Characters"),
  ],
  passport.authenticate("local.signup", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/signup",
    failureFlash: true,
  })
);

app.get("/user/signin", (req, res) => {
  const messages = req.flash("error");
  const csrfToken = req.csrfToken();
  res.render("user/signin", {
    csrfToken: csrfToken,
    messages: messages,
    hasErrors: messages.length > 0,
  });
});

app.post(
  "/user/signin",
  [
    check("email", "Invalid E-mail")
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("Invalid E-mail Address"),
    check("password", "Invalid password")
      .not()
      .isEmpty()
      .withMessage("Must Provide A Password"),
  ],
  passport.authenticate("local.signin", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/signin",
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
