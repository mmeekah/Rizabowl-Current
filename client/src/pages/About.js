import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import aboutAuth from "../images/about-author.jpg";
import signature from "../images/signature.png";

const About = () => {
  return (
    <>
      <Hero hero="aboutHero">
        <Banner title="About Us">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <div>
        <section className="featured-rooms">
          <Title title="Who we are" />
          <article className="desc">
            <div className="single-room-info">
              {/* <div className="single-room-images"> */}
              <img src={aboutAuth} className="single-room-image"></img>
              {/* </div> */}
              <p className="about-info">
                Aenean at massa et mauris feugiat ultricies quis sed felis.
                Fusce felis ex, ullamcorper at fringilla ut, commodo et dolor.
                Nulla nec nibh orci. Nulla et sagittis lacus. Proin scelerisque
                vulputate mauris. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut quis blandit justo. Mauris convallis quam
                vel urna consectetur pretium. Ut sit amet pharetra dui, ac
                sollicitudin augue. Duis pellentesque neque vel bibendum
                bibendum. Suspendisse gravida libero vel ultricies venenatis.
                Cras accumsan mauris eu fermentum fermentum. Vivamus non cursus
                risus, sit amet congue ligula. Duis tincidunt augue ac dictum
                scelerisque. Sed eget maximus metus, sit amet malesuada risus.
                In mi sapien, luctus sit amet ornare a, fermentum sed dolor. Ut
                sagittis velit a diam luctus, sed tempor dui finibus. Nunc id
                est at erat porttitor scelerisque ut et quam. Aenean urna est,
                placerat et venenatis eu, interdum et est. In hac habitasse
                platea dictumst. Pellentesque ornare felis lectus. Maecenas eros
                dui, iaculis in enim quis, auctor eleifend sem. Pellentesque
                iaculis ante non ultrices varius.
                <div className="about-img ">
                  <img src={signature}></img>
                </div>
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default About;
