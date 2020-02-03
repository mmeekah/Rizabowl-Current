import React from "react";
import { Link } from "react-router-dom";
import ins1 from "../images/ins-01.jpg";
import ins2 from "../images/ins-02.jpg";
import ins3 from "../images/ins-03.jpg";
import ins4 from "../images/ins-04.jpg";
import ins5 from "../images/ins-05.jpg";
import ins6 from "../images/ins-06.jpg";
import ins7 from "../images/ins-07.jpg";
import ins8 from "../images/ins-08.jpg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer-company">
                <div className="company-logo">
                  <Link to="/">Rizabowl</Link>
                </div>
                <ul className="company-contact">
                  <li>
                    <i className="lnr lnr-map-marker" />
                    <span>123 Mira St, Almaty Kazakhstan 0000</span>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <span>(+7) 746 93 93</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <span>ameekah93@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-3 col-sm-3">
              <div className="footer-link">
                <div className="footer-heading">
                  <h3>Link</h3>
                </div>
                <ul className="link-list">
                  <li>
                    <Link to="/about"> About </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/rizabowl/"
                      target="_blank"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="footer-ins">
                <div className="footer-heading">
                  <h3>Instagram</h3>
                </div>
                <ul className="ins-list">
                  <li>
                    <a
                      href="https://www.instagram.com/p/B7K9vRwptZ1/"
                      data-lightbox="roadtrip"
                    >
                      <img src={ins1} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/p/B7K9291Jd17/"
                      data-lightbox="roadtrip"
                    >
                      <img src={ins2} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/p/B5zeMb-JWD5/"
                      data-lightbox="roadtrip"
                    >
                      <img src={ins3} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/p/B46jnY8p-ng/"
                      data-lightbox="roadtrip"
                    >
                      <img src={ins4} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/rizabowl/"
                      data-lightbox="roadtrip"
                    >
                      <img src={ins5} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/rizabowl/"
                      data-lightbox="roadtrip"
                    >
                      <img src={ins6} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/rizabowl/"
                      data-lightbox="roadtrip"
                    >
                      <img src={ins7} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/rizabowl/"
                      data-lightbox="roadtrip"
                    >
                      <img src={ins8} alt="Instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright &copy; designed by Meekah. All rights reserved. </p>
      </div>
    </footer>
  );
}
