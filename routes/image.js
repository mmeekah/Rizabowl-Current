const express = require("express");
const router = express.Router();
const fs = require("fs");

const multer = require("multer");
const upload = multer({ dest: "./assets/upload" });
const Image = require("../models/Image");
const Product = require("../models/Product");

//web api
router.post(
  "/blog/:imageNumber/:id",
  upload.single("file"),
  async (req, res) => {}
);

router.post("/:imageNumber/:id", upload.single("file"), async (req, res) => {
  const productId = req.params.id;
  const imageNumber = req.params.imageNumber;
  const image = req.file;
  const newImage = {
    name: image.path,
    data: "",
    mimetype: image.mimetype
  };
  fs.readFile(newImage.name, async (err, data) => {
    if (err) {
      throw err;
    }
    newImage.data = data;
    const savedImage = await Image.create(newImage);

    //Remove Product Old Images
    const product = await Product.findById(productId);
    let oldImage;
    if (imageNumber === "image1") {
      oldImage = product.image1;
    } else if (imageNumber === "image2") {
      oldImage = product.image2;
    } else if (imageNumber === "image3") {
      oldImage = product.image3;
    }
    if (oldImage) {
      await Image.findByIdAndRemove(oldImage);
    }

    //Update corresponding product
    if (imageNumber === "image1") {
      await Product.findByIdAndUpdate(productId, {
        $set: { image1: savedImage._id }
      });
    } else if (imageNumber === "image2") {
      await Product.findByIdAndUpdate(productId, {
        $set: { image2: savedImage._id }
      });
    } else if (imageNumber === "image3") {
      await Product.findByIdAndUpdate(productId, {
        $set: { image3: savedImage._id }
      });
    }

    //Delete Files on server
    fs.unlink(newImage.name, () => {
      res.json(savedImage);
    });
  });
});

router.delete("/:imageNumber/:id", async (req, res) => {
  const imageNumber = req.params.imageNumber;
  const productId = req.params.id;

  const product = await Product.findById(productId);
  let image;
  if (imageNumber === "image1") {
    image = product.image1;
    product.image1 = null;
  } else if (imageNumber === "image2") {
    image = product.image2;
    product.image2 = null;
  } else if (imageNumber === "image3") {
    image = product.image3;
    product.image3 = null;
  }
  await Image.findByIdAndRemove(image);
  await Product.findByIdAndUpdate(productId, product);
  res.json(product);
});

module.exports = router;
