const express = require("express");
const router = express.Router();
const Cart = require("../models/cartSchema");
const Product = require("../models/productSchema");

router.get("/", (req, res) => {
  Product.find((err, p) => {
    res.render("index", { products: p });
  });
});

router.get("/config", (req, res) => {
  res.render("config");
});

router.get("/cart/", (req, res) => {
  if (!req.session.cart) {
    return res.render("cart", { products: null });
  }
  let cart = new Cart(req.session.cart);
  res.render("cart", {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice,
  });
});

router.get("/addcart/:id", (req, res) => {
  let productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function (err, product) {
    if (err) {
      console.log(`ERR: ${err}`);
      return res.redirect("/");
    }
    cart.add(product, product.id, product.imgSrc);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect("/");
  });
});

router.get("/add/:id", (req, res) => {
  let productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function (err, product) {
    if (err) {
      console.log(`ERR: ${err}`);
      return res.redirect("/");
    }
    cart.add(product, product.id, product.imgSrc);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect("/cart/");
  });
});

router.get("/rem/:id", (req, res) => {
  let productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.rem(productId);
  req.session.cart = cart;
  res.redirect("/cart/");
});

module.exports = router;
