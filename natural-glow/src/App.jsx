import React from "react";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";

function App() {
  return (
    <div className="relative">
      <Header />
      <Navigation />
      <Hero />
      <About />
      <Features/>
    </div>
  );
}

export default App;