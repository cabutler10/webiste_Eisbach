import React from "react";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import About from "../components/About";
import Hero from "../components/Hero";

const Homepage = () => {
  return (
    <div id="body">
      <Hero />
      <Newsletter />
      <About />
      <Products />
    </div>
  );
};

export default Homepage;
