const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = new mongoose.model("Product", productSchema, "products");
