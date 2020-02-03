import React, { useState, history } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import DeleteProductBtn from "./DeleteProductBtn";
import "../blog.css";
import axios from "axios";

export default function Post({ post, fetchBlogData, removePost, user }) {
  const { title, image, _id } = post;
  const [editing, setEditing] = useState(false);
  const [titleField, setTitleField] = useState(post.title);
  const [postField, setPostField] = useState(post.post);
  const [imageField, setImageField] = useState(post.image);

  const startEditingBlog = () => {
    setEditing(!editing);
  };

  const handleCancel = () => {
    setTitleField(post.title);
    setPostField(post.post);
    setImageField(post.image);
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
      image
    });

    setEditing(!editing);
  };

  // const { image } = this.state.post;

  return (
    <div className="blog">
      {image ? (
        <img
          src={`data:${image.mimeType};base64,${new Buffer(image.data).toString(
            "base64"
          )}`}
          alt="image"
        />
      ) : null}
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
            <button
              type="submit"
              className=" btn .btn-sm btn-outline-secondary"
            >
              Submit
            </button>
            <button
              type="button"
              className=" btn .btn-sm btn-outline-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className=" btn .btn-sm btn-outline-secondary"
              onClick={removeCurrentPost}
            >
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
