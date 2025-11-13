import React from "react";
import heroBanner from "../../assets/images/hero-banner.jpg"; // ✅ Your image

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden sticky top-0 z-40"
    >
      {/* ✅ Background Image */}
      <img
        src={heroBanner}
        alt="PureGlow Skincare Banner"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✅ Content Inside Banner */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          PureGlow Skincare
        </h1>

        <p className="text-gray-200 mb-8 text-lg md:text-xl">
          Natural beauty powered by science — reveal your healthiest, glowing skin.
        </p>

        <button className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg">
          Shop Now
        </button>
      </div>

      {/* ✅ Stats Section */}
      <div className="relative z-10 mt-16 flex flex-wrap justify-center gap-10 text-white">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-amber-400">5+</span>
          <p className="text-sm uppercase tracking-wide">Years Experience</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-amber-400">100%</span>
          <p className="text-sm uppercase tracking-wide">Organic Ingredients</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-amber-400">20K+</span>
          <p className="text-sm uppercase tracking-wide">Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;