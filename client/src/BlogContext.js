import React, { Component } from "react";
import axios from "axios";

const BlogContext = React.createContext();

class BlogProvider extends Component {
  state = {
    posts: [],
    currentPost: null
  };

  //getBlogData{
  componentDidMount() {
    this.fetchBlogData();
  }

  fetchBlogData = async () => {
    const res = await axios.get("api/blog");
    this.setState({
      posts: res.data,
      loading: false
    });
  };

  getPost = async id => {
    const res = await axios.get(`/api/blog/${id}`);
    this.setState({
      currentPost: res.data
    });
  };

  removePost = async id => {
    await axios.delete(`/api/blog/${id}`);
    this.fetchBlogData();
  };

  loadUser = async () => {
    const post = await axios.get("/api/blog/load");
    this.setState({ post });
  };

  render() {
    return (
      <BlogContext.Provider
        value={{
          ...this.state,
          getPost: this.getPost,
          fetchBlogData: this.fetchBlogData,
          removePost: this.removePost
        }}
      >
        {this.props.children}
      </BlogContext.Provider>
    );
  }
}

const BlogConsumer = BlogContext.Consumer;

export function withBlogConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <BlogConsumer>
        {value => <Component {...props} context={value} />}
      </BlogConsumer>
    );
  };
}

export { BlogProvider, BlogConsumer, BlogContext };
