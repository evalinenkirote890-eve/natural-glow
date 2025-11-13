import React from "react";
import heroImage from "../../assets/images/hero-banner.jpg"; 

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Text */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Glow Naturally <br /> with Every Touch
        </h1>
        <p className="text-gray-200 mb-8">
          Discover nature’s secret to radiant, healthy, and confident skin — powered by pure organic care.
        </p>
        <button className="bg-amber-400 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-500 transition">
          Shop Now
        </button>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-emerald-800 text-white rounded-xl shadow-lg px-8 py-6 flex flex-wrap justify-center space-x-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold">5+</h3>
          <p className="text-sm">Years of Glow</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">100%</h3>
          <p className="text-sm">Organic Care</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">10k+</h3>
          <p className="text-sm">Happy Customers</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">260+</h3>
          <p className="text-sm">Natural Products</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;