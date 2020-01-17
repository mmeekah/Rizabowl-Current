import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero className="homeHero">
        <Banner title="new collection" subtitle="2020 resolutions">
          <Link to="/products" className="btn-primary">
            our products
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedProducts />
    </>
  );
}
