const express = require("express");
const router = express.Router();
const csurf = require("tiny-csrf");
const passport = require("passport");
const { check, validationResult } = require("express-validator");

const Product = require("../models/productSchema");

router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("user/profile");
});

router.get("/logout", isLoggedIn, (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

router.use("/", notLoggedIn, (req, res, next) => {
  next();
});

router.get("/signup", (req, res) => {
  const messages = req.flash("error");
  const csrfToken = req.csrfToken();
  res.render("user/signup", {
    csrfToken: csrfToken,
    messages: messages,
    hasErrors: messages.length > 0,
  });
});

router.post(
  "/signup",
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

router.get("/signin", (req, res) => {
  const messages = req.flash("error");
  const csrfToken = req.csrfToken();
  res.render("user/signin", {
    csrfToken: csrfToken,
    messages: messages,
    hasErrors: messages.length > 0,
  });
});

router.post(
  "/signin",
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

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
