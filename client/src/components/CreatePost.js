import React, { useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import { useHistory } from "react-router-dom";
import axios from "axios";

const INITIAL_POST = {
  title: "",
  post: ""
};

export default function CreatePost({ fetchBlogData, setCreating, creating }) {
  const [post, setPost] = useState(INITIAL_POST);
  const [image, setImage] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setPost(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await axios.post("/api/blog", post);
    handleUpload(res.data._id);
    fetchBlogData();
    setCreating(!creating);
  }

  const handleUpload = async id => {
    const formData = new FormData();
    formData.append("file", image);

    await axios.post(`/api/image/blog/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };

  return (
    <>
      <Hero hero="createHero">
        <Banner title="Create Blog Post">
          <form className="form" onSubmit={handleSubmit} id="postForm">
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                name="title"
                placeholder="title of the post"
                className="input"
                value={post.name}
                onChange={handleChange}
              ></input>

              <label htmlFor="post">Post</label>
              <textarea
                className="form input-desc "
                type="text"
                name="post"
                label="Post"
                rows="10"
                placeholder="Your post here..."
                value={post.post}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="image">Upload Blog Image</label>
              <input
                className="btn btn-primary btn-sm float-left"
                id="image"
                type="file"
                height="480"
                width="480"
                onChange={e => setImage(e.target.files[0])}
              />
            </div>
            <button className="btn-primary" type="submit">
              Add Post
            </button>
          </form>
        </Banner>
      </Hero>
    </>
  );
}
