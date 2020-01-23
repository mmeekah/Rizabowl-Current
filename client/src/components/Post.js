import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import DeleteProductBtn from "./DeleteProductBtn";
export default function Post({ post, fetchBlogData, removePost, user }) {
  const { title, images, _id } = post;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single product" />
        <div className="price-top">
          <h6>{title}</h6>
        </div>
        {user ? (
          <DeleteProductBtn
            id={_id}
            fetchBlogData={fetchBlogData}
            removePost={removePost}
          />
        ) : null}
      </div>
      <p className="room-info">{title}</p>
    </article>
  );
}
Post.propTypes = {
  room: PropTypes.shape({
    title: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
