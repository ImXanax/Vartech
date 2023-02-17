const express = require("express");
const router = express.Router();

const Product = require("../models/productSchema");

router.get("/", (req, res) => {
  Product.find((err, p) => {
    res.render("index", { products: p });
  });
});

router.get("/config", (req, res) => {
  res.render("config");
});

module.exports = router
