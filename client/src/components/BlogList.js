import React from "react";
import Post from "./Post";
import "../blog.css";

export default function BlogList({ posts, fetchBlogData, removePost, user }) {
  return (
    <section>
      <div className="blogs">
        {posts.map(item => {
          return (
            <Post
              user={user}
              key={item._id}
              post={item}
              fetchBlogData={fetchBlogData}
              removePost={removePost}
            />
          );
        })}
      </div>
    </section>
  );
}
