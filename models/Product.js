const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: true },
  count: { type: Number, required: true },
  description: { type: String, required: true },
  images: { type: Array, default: [] },
  featured: { type: Boolean, default: false }
});

module.exports = mongoose.model("Product", ProductSchema);
