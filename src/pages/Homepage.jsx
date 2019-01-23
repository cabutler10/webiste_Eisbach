import React from "react";
import Products from "../components/Products";
import About from "../components/About";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import NewProduct from "../components/NewProduct";
import Layout from "../components/Layout";

const Homepage = props => {
  return (
    <div id="body">
      <Layout loc={props.location.pathname}>
        <Hero />
        <Feature />
        <NewProduct />
        <Products />
        <About />
      </Layout>
    </div>
  );
};

export default Homepage;
