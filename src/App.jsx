import React from "react";

import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Manufacturers from "./components/sections/Manufacturers";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Header />

      <Hero />
      <Features />
      <About />
      <Products />
      <Testimonials />
      <Manufacturers />
      <Newsletter />

      <Footer />
    </>
  );
};

export default App;
