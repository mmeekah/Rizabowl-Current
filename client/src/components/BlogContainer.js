import React, { useEffect, useState } from "react";
import { withBlogConsumer } from "../BlogContext";
import Loading from "./Loading";
import AddProductBtn from "./AddProductBtn";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import CreateProduct from "./CreateProduct";
import BlogList from "./BlogList";

function BlogContainer({ BlogContext }) {
  console.log(BlogContext);
  const { fetchBlogData, removePost } = BlogContext;

  const [creating, setCreating] = useState(false);

  const [user, setUser] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      try {
        const res = await axios.get("/api/user/load");
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadUser();
  }, []);

  return (
    <>
      {creating ? (
        <CreateProduct
          fetchBlogData={fetchBlogData}
          setCreating={setCreating}
          creating={creating}
        />
      ) : null}

      <BlogList
        user={user}
        fetchBlogData={fetchBlogData}
        removePost={removePost}
      />
      {user ? (
        <AddProductBtn setCreating={setCreating} creating={creating} />
      ) : null}
    </>
  );
}

export default withBlogConsumer(BlogContainer);
