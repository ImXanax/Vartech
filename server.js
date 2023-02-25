const express = require("express");
const mongoose = require("mongoose");
const csurf = require("tiny-csrf");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const flash = require("connect-flash");
const MongoStore = require("connect-mongo")(session);
const { check, validationResult } = require("express-validator");

const Product = require("./models/productSchema");

require("./config/passport");
require("dotenv").config();

const routes = require("./routes/index");
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 5500;

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/shop", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`🟢 Mongo Connected`);
  })
  .catch((e) => {
    console.error(e);
  });
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("cookie-parser-secret"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
    cookie: { maxAge: 180 * 60 * 1000 },
  })
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

app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

app.use("/user", userRoutes);
app.use("/", routes);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(process.env.PORT || 5500, () => {
  console.log(`🟢 Server running http://127.0.0.1:${port}`);
});
