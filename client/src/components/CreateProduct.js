import React, { useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { useHistory } from "react-router-dom";
import axios from "axios";

const INITIAL_PRODUCT = {
  name: "",
  description: "",
  price: "",
  size: "",
  count: "",
  slug: "",
  type: ""
};

export default function CreateProduct({ fetchData, setCreating, creating }) {
  const [product, setProduct] = useState(INITIAL_PRODUCT);
  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const slug = product.name.toLowerCase().replace(" ", "-");
    setProduct({ ...product, slug });
    await axios.post("/api/product", product);
    fetchData();
    setCreating(!creating);
  }

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

              <label htmlFor="type">Category</label>
              <input
                type="text"
                name="type"
                placeholder="plate/bowl/mug"
                className="input"
                value={product.type}
                onChange={handleChange}
              ></input>

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

              <label htmlFor="size">Size</label>
              <input
                type="number"
                name="size"
                placeholder="size of the product(in)"
                className="input"
                value={product.size}
                onChange={handleChange}
              ></input>

              <label htmlFor="count">Set Size</label>
              <input
                type="number"
                name="count"
                placeholder="set size"
                className="input"
                value={product.count}
                onChange={handleChange}
              ></input>
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
