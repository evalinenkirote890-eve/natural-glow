import React from "react";
import { motion } from "framer-motion";
import heroBanner from "../../assets/images/hero-banner.jpg";

const Hero = () => {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section
        id="home"
        className="relative h-[85vh] md:h-[80vh] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Glow Naturally <br /> with Every Touch
          </h1>
          <p className="text-gray-200 mb-8">
            Discover nature’s secret to radiant, healthy, and confident skin —
            powered by pure organic care.
          </p>

          {/* Explore Now Button */}
          <button className="bg-amber-400 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-500 transition">
            Explore Now
          </button>
        </div>
      </section>

      {/* ===== Animated Floating Stats (Below Banner) ===== */}
      <motion.section
        className="relative z-20 -mt-16 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="bg-emerald-800 text-white rounded-2xl shadow-2xl px-6 py-8 md:px-12 md:py-10 flex justify-between items-center gap-6 flex-wrap w-[90%] max-w-6xl">
          {[
            { value: "5+", label: "Years of Glow" },
            { value: "100%", label: "Organic Care" },
            { value: "10k+", label: "Happy Customers" },
            { value: "260+", label: "Natural Products" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center flex-1 min-w-[120px] hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm md:text-base opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Hero;