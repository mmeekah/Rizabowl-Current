const mongoose = require("mongoose");
const BlogSchema = mongoose.Schema({
  title: { type: String, required: true },
  post: { type: String, required: true },
  images: { type: Array, default: [] }
});

module.exports = mongoose.model("Blog", BlogSchema);
