import React from "react";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Products from "./components/sections/Products";
import Newsletter from "./components/sections/Newsletter";
import Manufacturers from "./components/sections/Manufacturers";
import Testimonials from "./components/common/Testimonials";
import Button from "./components/common/Button";
import Cards from "./components/common/Cards";
import SectionWrapper from "./components/common/SectionWrapper";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="relative">
      <Header />
      <Navigation />
      <Hero />
      <About />
      <Features/>
      <Products />
      <Newsletter />
      <Manufacturers />
      <Testimonials />
      <Button />
      <Cards />
      <SectionWrapper />
      <Footer />
    </div>
  );
}

export default App;