import React, { useState, history } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import DeleteProductBtn from "./DeleteProductBtn";
import "../blog.css";
import axios from "axios";

export default function Post({ post, fetchBlogData, removePost, user }) {
  const { title, images, _id } = post;
  const [editing, setEditing] = useState(false);
  const [titleField, setTitleField] = useState(post.title);
  const [postField, setPostField] = useState(post.post);

  const startEditingBlog = () => {
    setEditing(!editing);
  };

  const handleCancel = () => {
    setTitleField(post.title);
    setPostField(post.post);
    setEditing(!editing);
  };

  const removeCurrentPost = () => {
    // const post = getPost({ _id });
    const { _id } = post;
    console.log(post);
    removePost(_id);
    // history.push("/blogs");
  };

  // const removeCurrentPost = () => {
  //   const { removePost, getPost } = post;
  //   const post = getPost({ _id });
  //   const { _id } = post;
  //   removePost(_id);
  //   console.log(post);
  //   history.push("/blogs");
  //   fetchBlogData();
  // };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put("/api/blog", {
      _id,
      title: titleField,
      post: postField,
      images
    });

    setEditing(!editing);
  };

  return (
    <div className="blog">
      <img src={images[0] || defaultImg} alt="single product" />
      <div className="blog-desc">
        {user ? (
          <button className="editBlogBtn" onClick={startEditingBlog}>
            <i className="fas fa-pen"> </i>
          </button>
        ) : null}
        {editing ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={titleField}
              className="form-control"
              onChange={e => setTitleField(e.target.value)}
            />
            <br />
            <textarea
              name="post"
              value={postField}
              onChange={e => setPostField(e.target.value)}
              className="form-control"
              rows="4"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" onClick={removeCurrentPost}>
              Delete
            </button>
          </form>
        ) : (
          <>
            <h6>{titleField}</h6>
            <p>{postField}</p>
          </>
        )}
      </div>
      {/* {user ? (
          <DeleteProductBtn
            id={_id}
            fetchBlogData={fetchBlogData}
            removePost={removePost}
          />
        ) : null} */}
    </div>
  );
}
Post.propTypes = {
  room: PropTypes.shape({
    title: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};