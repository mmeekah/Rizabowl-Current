import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ProductContainer from "../components/ProductContainer";

const Products = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Products">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <ProductContainer />
    </>
  );
};

export default Products;
