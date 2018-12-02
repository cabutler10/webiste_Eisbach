import React from "react";
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

export default Homepage;
