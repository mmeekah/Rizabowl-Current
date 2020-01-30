// import express, Router, Product
const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// Get all products
router.get("/", async (req, res) => {
  let products = await Product.find().populate("image1");
  res.json(products);
});

// Get single product
router.get("/:slug", async (req, res) => {
  let product = await Product.findOne({ slug: req.params.slug })
    .populate("image1")
    .populate("image2")
    .populate("image3");
  res.json(product);
});

// Add new Product
router.post("/", async (req, res) => {
  const newProduct = new Product({ ...req.body });
  const product = await newProduct.save();
  res.json(product);
});

// Remove existing product
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await Product.findByIdAndRemove(id);
  res.json(null);
});

// Update product
router.put("/", async (req, res) => {
  const newProduct = new Product({ ...req.body });
  const product = await Product.findByIdAndUpdate(req.body._id, newProduct);
  res.json(product);
});

module.exports = router;
