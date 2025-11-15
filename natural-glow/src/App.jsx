import React from "react";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Products from "./components/sections/Products";
import Manufacturers from "./components/sections/Manufacturers";
import Newsletter from "./components/sections/Newsletter";

// Common
import Testimonials from "./components/common/Testimonials";

const App = () => {
  return (
    <div className="font-poppins bg-white text-gray-900">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Products Section */}
      <Products />

      {/* Manufacturers Section */}
      <Manufacturers />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default App;