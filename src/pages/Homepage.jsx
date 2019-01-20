import React from "react";
import Products from "../components/Products";
//import Newsletter from "../components/Newsletter";
import About from "../components/About";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import NewProduct from "../components/NewProduct";
//import Stores from "../components/Stores";
//import Instagram from "../components/Instagram";

const Homepage = () => {
  return (
    <div id="body">
      <Hero />
      {/* <Newsletter /> */}
      <Feature />
      <NewProduct />
      <Products />
      <About />
      {/* <Stores /> */}
      {/*<Instagram /> */}
    </div>
  );
};

export default Homepage;
