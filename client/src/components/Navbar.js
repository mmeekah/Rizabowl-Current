import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <div className="topbar">
          <div className="topbar__wrapper">
            <div>
              <div className="topbar__inner">
                <div className="topbar__social">
                  <div>
                    <a
                      href="https://www.instagram.com/rizabowl/"
                      className="text-light"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      className="mx-2 text-light"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.pinterest.com/justinablakeney/ceramics-pottery/">
                      <i className="fab fa-pinterest text-light" />
                    </a>
                    <Link to="/login">
                      <i className="fas fa-user text-light ml-2"></i>
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="nav-btn"
                    onClick={this.handleToggle}
                  >
                    <FaAlignRight className="nav-icon " />
                  </button>
                </div>

                {/* <div className="shopcart js-shop-cart">
                  <div className="icon">
                   
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header"></div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/">
                  R I Z A B O W L
                  {/* <img src={logo} alt="Rizabowl" width="40px" /> */}
                </Link>
              </li>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/products">PRODUCTS</Link>
              </li>

              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              {/* <li>
                <Link to="/profile">PROFILE</Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
