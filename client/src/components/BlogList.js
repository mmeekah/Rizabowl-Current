import React from "react";
import Post from "./Post";

export default function BlogList({ posts, fetchBlogData, removePost, user }) {
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {posts.map(item => {
          return (
            <blog
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
