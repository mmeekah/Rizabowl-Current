// import express, Router, Product
const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// Get all Posts
router.get("/", async (req, res) => {
  let posts = await Product.find();
  res.json(posts);
});

// Get single Post
router.get("/:id", async (req, res) => {
  let post = await Blog.findOne({ id: req.params._id });
  res.json(post);
});

// Add new Post
router.post("/", async (req, res) => {
  const newPost = new Blog({ ...req.body });
  const post = await newPost.save();
  res.json(post);
});

// Remove existing Post
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await Post.findByIdAndRemove(id);
  res.json(null);
});

// Update Post
router.put("/", async (req, res) => {
  const newPost = new Blog({ ...req.body });
  const post = await Blog.findByIdAndUpdate(req.body._id, newPost);
  res.json(post);
});

module.exports = router;
