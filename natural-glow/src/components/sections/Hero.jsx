import React from "react";
import heroBanner from "../../assets/images/hero-banner.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Lazy-loaded background image */}
      <img
        src={heroBanner}
        alt="PureGlow Skincare Banner"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-6 mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Glow Naturally <br /> with Every Touch
        </h1>
        <p className="text-gray-200 mb-8 text-lg">
          Discover nature’s secret to radiant, healthy, and confident skin —
          powered by pure organic care.
        </p>
        <button className="bg-amber-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition">
          Explore Now
        </button>
      </div>

      {/* Sticky Horizontal Stats */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-amber-400/95 backdrop-blur-md text-white py-4 px-6 rounded-2xl shadow-lg z-50">
        <div className="flex justify-between items-center flex-wrap text-center gap-4">
          <div>
            <h3 className="text-2xl font-bold">5+</h3>
            <p className="text-sm uppercase tracking-wide">Years Experience</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">100%</h3>
            <p className="text-sm uppercase tracking-wide">Organic Ingredients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">20K+</h3>
            <p className="text-sm uppercase tracking-wide">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">15+</h3>
            <p className="text-sm uppercase tracking-wide">Products Launched</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;