const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: false },
  capacity: { type: Number, required: true },
  description: { type: String, required: true },
  image1: { type: mongoose.Schema.Types.ObjectId, ref: "images" },
  image2: { type: mongoose.Schema.Types.ObjectId, ref: "images" },
  image3: { type: mongoose.Schema.Types.ObjectId, ref: "images" },
  featured: { type: Boolean, default: false }
});

module.exports = mongoose.model("Product", ProductSchema);
