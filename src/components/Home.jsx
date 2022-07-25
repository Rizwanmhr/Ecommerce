import React from "react";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Slider from "./Slider/Slider";
import Products from "./products/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
