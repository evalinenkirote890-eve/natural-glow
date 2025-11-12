import React from "react";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Testimonials from "./components/common/Testimonials";
import Button from "./components/common/Button";
import Cards from "./components/common/Cards";

function App() {
  return (
    <div className="relative">
      <Header />
      <Navigation />
      <Hero />
      <About />
      <Features/>
      <Testimonials />
      <Button />
      <Cards />
    </div>
  );
}

export default App;