import React, { Component } from "react";
import "./App.css";

import axios from "axios";

import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./login/Login";

import CreateProduct from "./components/CreateProduct";
import setAuthToken from "./utils/setAuthToken";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggingActive: true,
      user: null
    };
  }

  removeUser = () => {
    this.setState({
      user: null
    });
  };

  loadUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
    const res = await axios.get("/api/user/load");
    this.setState({ user: res.data });
  };

  componentDidMount() {
    this.loadUser();
  }

  render() {
    const { isLoggingActive, user } = this.state;
    console.log(user);
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:slug" component={SingleProduct} />
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                removeUser={this.removeUser}
                user={this.state.user}
                loadUser={this.loadUser}
              />
            )}
          />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
