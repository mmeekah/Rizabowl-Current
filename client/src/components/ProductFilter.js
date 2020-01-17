import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context";
import Title from "../components/Title";
//Get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function ProductFilter({ products }) {
  const context = useContext(ProductContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize
    //breakfast, pets
  } = context;
  //Get unique types
  let types = getUnique(products, "type");
  //Add all
  types = ["all", ...types];
  //Map to JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let count = getUnique(products, "capacity");
  count = count.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search products" />
      <form className="filter-form">
        {/* select type*/}
        <div className="form-group">
          <label htmlFor="type"> Product Type </label>
          <select
            name="type"
            id="typel"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>

        {/* end type*/}
        {/* select count*/}
        <div className="form-group">
          <label htmlFor="capacity"> Set size </label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {count}
          </select>
        </div>

        {/* end count*/}
        {/* Product Price */}
        <div className="form-group">
          <label htmlFor="price">Product Price ${price}</label>

          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/*  End Product Price */}

        {/* Size */}

        <div className="form-group">
          <label htmlFor="size"> Product Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* End of Size */}
        {/* Extras*/}
        {/* <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast"> breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets"> pets</label>
          </div>
        </div> */}

        {/* End of Extras */}
      </form>
    </section>
  );
}
