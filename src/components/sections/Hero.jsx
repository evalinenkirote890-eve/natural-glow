import React from "react";
import { motion } from "framer-motion";

import heroBg from "../../assets/images/hero-banner.jpg"; 
import productComposition from "../../assets/images/hero-product-composition.jpg";

import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="relative w-full h-[95vh] flex items-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

 <div className="absolute inset-0 bg-[#184d47]/40" />

      <div className="relative container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Reveal Your{" "}
              <span className="text-[var(--brand-primary)]">Natural Glow</span>
            </h1>

            <p className="mt-6 text-white/90 leading-relaxed max-w-md">
              Botanical + science — skincare crafted to hydrate, repair and
              reveal radiance.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-7 py-3 bg-[var(--brand-primary)] text-white rounded-xl shadow-lg hover:bg-opacity-90 transition">
                Shop Now
              </button>

              <button className="px-7 py-3 bg-white text-gray-900 rounded-xl shadow hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>

            <div className="mt-12">
              <Stats />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="hidden md:flex justify-end"
          >
            <img
              src={productComposition}
              alt="Product Composition"
              className="rounded-3xl shadow-xl w-full max-w-md"
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
