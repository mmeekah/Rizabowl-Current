import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import DeleteProductBtn from "./DeleteProductBtn";
export default function Product({ product, fetchData, removeProduct, user }) {
  const { name, slug, images, price, _id } = product;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single product" />
        <div className="price-top">
          <h6>${price}</h6>
        </div>
        {user ? (
          <DeleteProductBtn
            id={_id}
            fetchData={fetchData}
            removeProduct={removeProduct}
          />
        ) : null}
        <Link to={`/products/${slug}`} className="btn-primary room-link">
          Details
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
Product.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
