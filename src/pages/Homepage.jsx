import React from "react";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import About from "../components/About";
import Hero from "../components/Hero";
//import Stores from "../components/Stores";
import Instagram from "../components/Instagram";

const Homepage = () => {
  return (
    <div id="body">
      <Hero />
      <Newsletter />
      <About />
      <Products />
      {/* <Stores /> */}
      <Instagram />
    </div>
  );
};

export default Homepage;
