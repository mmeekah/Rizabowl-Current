// import express, Router, Product
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get all products
router.get("/", async (req, res) => {
  let products = await Product.find();
  res.json(products);
});

// Add new Product
router.post("/", async (req, res) => {
  const newProduct = new Product({ ...req.body });
  const product = await newProduct.save();
  res.json(product);
});

// Remove existing product
module.exports = router;
