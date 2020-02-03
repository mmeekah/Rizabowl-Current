import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedProducts from "../components/FeaturedProducts";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    window.$("#carouselExampleSlidesOnly").carousel({
      interval: 3000
    });
  }, []);

  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Hero className="homeHero">
              <Banner title="new collection" subtitle="Spring 2020">
                <Link to="/products" className="btn-primary">
                  our products
                </Link>
              </Banner>
            </Hero>
          </div>
          <div class="carousel-item">
            <Carousel />
          </div>
        </div>
      </div>

      <Services />
      <FeaturedProducts />
    </>
  );
}
