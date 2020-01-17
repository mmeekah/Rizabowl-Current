import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Profile = () => {
  return (
    <>
      <Hero hero="aboutHero">
        <Banner title="My Profile">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
        {/* <Title title="Who we are" /> */}
      </Hero>
    </>
  );
};

export default Profile;
