import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;