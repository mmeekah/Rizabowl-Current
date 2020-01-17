import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Hero hero="loginHero" ref={this.props.containerRef}>
          <Banner title="Login">
            <form className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="mmeekah"
                  className="input"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="qwer123"
                  className="input"
                ></input>
              </div>
              <Link to="/products" className="btn-primary">
                login
              </Link>
            </form>
          </Banner>
        </Hero>
      </>
    );
  }
}
