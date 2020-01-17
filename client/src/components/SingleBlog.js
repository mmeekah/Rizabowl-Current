import React from "react";

export default function SingleBlog({
  blog: {
    fields: { image, description, name }
  }
}) {
  return (
    <article className="blog">
      <img className="blog-image" src={image}></img>
      <div>
        <h3 className="blog-desc">{name}</h3>
        <p className="blog-desc">{description}</p>
      </div>
    </article>
  );
}
