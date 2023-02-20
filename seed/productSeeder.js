const mongoose = require("mongoose");
const Product = require("../models/productSchema");

mongoose
  .connect("mongodb://127.0.0.1:27017/shop", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((e) => {
    console.error(e);
  })
  .then(async () => {
    console.log(`🟢 Mongo Connected`);

    try {
      const products = [
        new Product({
          imgSrc: "./images/Products/1.png",
          title: "EVGA RTX 3080 FTW3 ULTRA 10GB",
          price: 35000000,
        }),
        new Product({
          imgSrc: "./images/Products/2.png",
          title: "ASUS ROG STRIX RTX 4080 OC 16GB",
          price: 50000000,
        }),
        new Product({
          imgSrc: "./images/Products/3.png",
          title: "ASUS ROG STRIX GeForce RTX 3090 GUNDAM EDITION",
          price: 70000000,
        }),
        new Product({
          imgSrc: "./images/Products/4.png",
          title: "ASUS TUF GAMING RTX 3090 OC 24GB",
          price: 65000000,
        }),
        new Product({
          imgSrc: "./images/Products/5.png",
          title: "ASUS ROG STRIX RTX 4090 24GB",
          price: 80000000,
        }),
        new Product({
          imgSrc: "./images/Products/6.png",
          title: "ASUS TUF GAMING RTX 4080 16GB GDDR6X OC Edition",
          price: 76000000,
        }),
        new Product({
          imgSrc: "./images/Products/7.png",
          title: "INNO3D RTX 3080 Ti ICHILL X4 12GB",
          price: 55000000,
        }),
        new Product({
          imgSrc: "./images/Products/8.png",
          title: "ZOTAC GAMING RTX 4090 AMP EXTREME AIRO 24GB",
          price: 60000000,
        }),
        new Product({
          imgSrc: "./images/Products/9.png",
          title: "ZOTAC GAMING GeForce RTX 4090 Trinity",
          price: 56000000,
        }),
      ];
      products.map(async (p, index) => {
        console.log(`p: ${p}\n\n`);
        await p.save((err, result) => {
          console.log(`result: ${result}`);
          console.log(`error: ${err}`);
        });
      });
    } catch (e) {
      console.log(e);
    }
  });
