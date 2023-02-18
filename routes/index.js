const express = require("express");
const router = express.Router();
const Cart = require('../models/cartSchema')
const Product = require("../models/productSchema");

router.get("/", (req, res) => {
  Product.find((err, p) => {
    res.render("index", { products: p });
  });
});

router.get("/config", (req, res) => {
  res.render("config");
});

router.get("/addcart/:id", (req, res) => {
  let productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function (err, product) {
    if (err) {
      return res.redirect("/");
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/')
  });
});

module.exports = router;
