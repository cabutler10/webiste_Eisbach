import React from "react";
import PropTypes from "prop-types";
import Products from "../components/Products";
import Newletter from "../components/Newletter";
import About from "../components/About";
import Hero from "../components/Hero";

const Homepage = () => {
  return (
    <div id="body">
      <Hero />
      <Newletter />
      <About />
      <Products />
    </div>
  );
};

Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Homepage;
