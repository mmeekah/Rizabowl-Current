import React, { useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { useHistory } from "react-router-dom";
import axios from "axios";

const INITIAL_POST = {
  title: "",
  post: ""
};

export default function CreatePost({ fetchBlogData, setCreating, creating }) {
  const [post, setPost] = useState(INITIAL_POST);
  function handleChange(event) {
    const { name, value } = event.target;
    setPost(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post("/api/blog", post);
    fetchBlogData();
    setCreating(!creating);
  }

  return (
    <>
      <Hero hero="createHero">
        <Banner title="Create Blog Post">
          <form className="form" onSubmit={handleSubmit}>
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
              <input
                className="form"
                type="text"
                name="post"
                label="Post"
                placeholder="Your post here..."
                className="input"
                value={post.post}
                onChange={handleChange}
              ></input>
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
