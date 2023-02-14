const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Product = require("./models/productSchema");

const app = express();
const port = process.env.PORT || 5500;
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

app.use(express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const newArr = []
  Product.find((err, p) => {
    res.render("index", { products: p });
  });
});

app.get("/config", (req, res) => {
  res.render("config");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(process.env.PORT || 5500, () => {
  console.log(`🟢 Server running http://localhost:${port}`);
});
