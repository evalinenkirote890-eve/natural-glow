import React from "react";
import heroImg from "../../assets/images/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="bg-glow-cream py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-glow-brown mb-4">
            Natural Glow 
          </h1>

          <p className="text-lg text-glow-clay mb-6 leading-relaxed">
  Embrace your natural glow with products crafted for radiant, healthy skin.  
  Our formulas are designed to nourish, protect, and restore your beauty with ingredients  
  that are gentle, effective, and safe for all skin types.
</p>

          
          <div className="flex gap-4 mb-10">
            <button className="bg-glow-amber text-white px-6 py-3 rounded-xl font-semibold">
              Shop Now
            </button>
            <button className="bg-glow-amberDark text-white px-6 py-3 rounded-xl font-semibold">
              Learn More
            </button>
            <button className="border border-glow-amber px-6 py-3 rounded-xl text-glow-amber font-semibold">
              Contact Us
            </button>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-10">
            <div>
              <h3 className="text-2xl font-bold text-glow-brown">10+</h3>
              <p className="text-glow-clay">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-glow-brown">500+</h3>
              <p className="text-glow-clay">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-glow-brown">50+</h3>
              <p className="text-glow-clay">Products</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-glow-brown">100%</h3>
              <p className="text-glow-clay">Natural & Safe</p>
            </div>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Hero Banner"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;