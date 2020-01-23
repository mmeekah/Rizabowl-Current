import React from "react";

export default function SingleBlog({ post: { title, post, image } }) {
  return (
    <article className="blog">
      <img className="blog-image" src={image}></img>
      <div>
        <h3 className="blog-desc">{title}</h3>
        <p className="blog-desc">{post}</p>
      </div>
    </article>
  );
}

// {
//   post: {
//       fields: { title, post, image }
//     }
//   }
