const passport = require("passport");
const { body, validationResult } = require("express-validator");
const UsersSchema = require("../models/userSchema");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UsersSchema.findById(id, (err, user) => {
    done(err, user);
  });
});

// SIGN UP
passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        var text = errors.array();
        var message = [];
        text.forEach(function (err) {
          message.push(err.msg);
        });
        return done(null, false, req.flash("error", message));
      }
      UsersSchema.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, { message: "Email Already In Use" });
        }
        const newUser = new UsersSchema();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save((err, res) => {
          if (err) {
            return done(err);
          }
          return done(null, newUser);
        });
      });
    }
  )
);

// SIGN IN
passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        var text = errors.array();
        var message = [];
        text.forEach(function (err) {
          message.push(err.msg);
        });
        return done(null, false, req.flash("error", message));
      }
      UsersSchema.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "No User Found!" });
        }
        if (!user.validatePassword(password)) {
          return done(null, false, { message: "Wrong Password!" });
        }
        return done(null, user);
      });
    }
  )
);
