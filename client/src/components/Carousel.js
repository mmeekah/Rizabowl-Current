import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <Hero hero="aboutHero">
        <Banner title=" Ceramics for Slow Life">
          <Link to="/" className="btn-primary">
            Shop Now
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Carousel;
