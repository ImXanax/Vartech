const passport = require("passport");
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

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      UsersSchema.findOne({ email: email }, (err, user) => {
        if (err) {
          console.log(`ERR1:${err}`);
          return done(err);
        }
        if (user) {
          console.log(`ERR2:${user}`);
          return done(null, false, { message: "Email Already In Use" });
        }
        const newUser = new UsersSchema();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save((err, res) => {
          if (err) {
            console.log(`ERR3:${err}`);
            return done(err);
          }
          return done(null, newUser);
        });
      });
    }
  )
);
