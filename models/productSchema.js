const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Product',schema)
