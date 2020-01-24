import React, { useEffect, useState } from "react";
import { withBlogConsumer } from "../BlogContext";
import Loading from "./Loading";
import AddProductBtn from "./AddProductBtn";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import CreatePost from "./CreatePost";
import BlogList from "./BlogList";

function BlogContainer({ context }) {
  const { fetchBlogData, removePost, posts } = context;
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

  //   useEffect(() => {

  //   const loadPost = async () => {
  //     const { getPost } = this.context;
  //     await getPost(this.state.title);
  //     this.setState({
  //       post: this.context.currentPost
  //     });
  //   };
  //   loadUser();
  //   loadPost();
  // }, [props.post]

  // removeCurrentPost = () => {
  // const { removePost, getPost} = this.context;
  // const post = getPost(this.state.title);
  // const { _id } = post;
  // removePost(_id);
  // this.props.history.push("/blog");
  // };

  const editCurrentPost = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  // handleChange = e => {
  // const { name, value } = e.target;
  // this.setState({
  //   post: {
  //     ...this.state.post,
  //     [name]: value
  //   }
  // });
  // };

  // finishEditing = e => {
  // e.preventDefault();
  // // send request
  // axios.put("/api/blog", this.state.product);
  // this.setState({
  //   editing: false
  // });
  // };

  return (
    <>
      {creating ? (
        <CreatePost
          fetchBlogData={fetchBlogData}
          setCreating={setCreating}
          creating={creating}
        />
      ) : null}

      <BlogList
        user={user}
        fetchBlogData={fetchBlogData}
        removePost={removePost}
        posts={posts}
      />
      {user ? (
        <>
          <AddProductBtn setCreating={setCreating} creating={creating} />

          {/* <button className="editBtn" onClick={editCurrentPost}>
            <i className="fas fa-pen"> </i>
          </button> */}
        </>
      ) : null}
    </>
  );
}

export default withBlogConsumer(BlogContainer);
