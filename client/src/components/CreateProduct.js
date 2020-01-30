import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";
import axios from "axios";

const INITIAL_PRODUCT = {
  name: "",
  description: "",
  price: "",
  size: "",
  capacity: "",
  type: ""
};

export default function CreateProduct({ fetchData, setCreating, creating }) {
  const params = useParams();
  const [product, setProduct] = useState(INITIAL_PRODUCT);
  const [imageOneToUpload, setImageOneToUpload] = useState(null);
  const [imageTwoToUpload, setImageTwoToUpload] = useState(null);
  const [imageThreeToUpload, setImageThreeToUpload] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  }

  useEffect(() => {
    const getProduct = () => {
      const res = axios.get(`/api/product/${params.id}`);
    };
    getProduct();
  }, []);

  const handleUpload = async (imageToUpload, id, imageNumber) => {
    const formData = new FormData();
    formData.append("file", imageToUpload);
    const res = axios.post(`/api/image/${imageNumber}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!product.name || !product.type) {
      alert("All fields are required");
      return;
    }
    const slug = product.name.toLowerCase().replace(" ", "-");
    setProduct({ ...product, slug });
  }

  useEffect(() => {
    const finishUpdating = async () => {
      const res = await axios.post("/api/product", product);
      handleUpload(imageOneToUpload, res.data._id, "image1");
      handleUpload(imageTwoToUpload, res.data._id, "image2");
      handleUpload(imageThreeToUpload, res.data._id, "image3");
      fetchData();
      setCreating(!creating);
    };
    if (product.slug) {
      finishUpdating();
    }
  }, [product.slug]);

  return (
    <>
      <Hero hero="createHero">
        <Banner title="Create Product">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Serving Bowl"
                className="input"
                value={product.name}
                onChange={handleChange}
              ></input>
            </div>
            {/* <label htmlFor="slug">Slug</label>
              <input
                type="text"
                name="slug"
                placeholder="serving-bowl"
                className="input"
                value={product.slug}
                onChange={handleChange}
              ></input> */}
            <div className="form-group">
              <label htmlFor="type">Category</label>
              <input
                type="text"
                name="type"
                placeholder="plate/bowl/mug"
                className="input"
                value={product.type}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                label="Description"
                placeholder="Description"
                className="input"
                value={product.description}
                onChange={handleChange}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                placeholder="price"
                className="input"
                value={product.price}
                onChange={handleChange}
              ></input>
              <div className="form-group"></div>
              <label htmlFor="size">Size</label>
              <input
                type="number"
                name="size"
                placeholder="size of the product(in)"
                className="input"
                value={product.size}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="count">Set Size</label>
              <input
                type="number"
                name="capacity"
                placeholder="set size"
                className="input"
                value={product.count}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="image1">Image One (Cover Image)</label>
              <input
                id="image1"
                type="file"
                onChange={e => {
                  setImageOneToUpload(e.target.files[0]);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image2">Image Two</label>
              <input
                id="image2"
                type="file"
                onChange={e => {
                  setImageTwoToUpload(e.target.files[0]);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image3">Image Three</label>
              <input
                id="image3"
                type="file"
                onChange={e => {
                  setImageThreeToUpload(e.target.files[0]);
                }}
              />
            </div>
            <button className="btn-primary" type="submit">
              Add Product
            </button>
          </form>
        </Banner>
      </Hero>
    </>
  );
}
