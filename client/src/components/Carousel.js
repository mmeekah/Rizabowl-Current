import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <Hero hero="carouselHero">
        <Banner title=" Ceramics for Slow Life">
          <a
            href="https://www.instagram.com/rizabowl/"
            target="_blank"
            className="btn-primary"
          >
            Shop Now
          </a>
        </Banner>
      </Hero>
    </>
  );
};

export default Carousel;
