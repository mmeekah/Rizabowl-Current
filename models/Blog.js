const mongoose = require("mongoose");
const BlogSchema = mongoose.Schema({
  title: { type: String, required: true },
  post: { type: String, required: true },
  image: { type: mongoose.Schema.Types.ObjectId, ref: "images" }
});

module.exports = mongoose.model("Blog", BlogSchema);
