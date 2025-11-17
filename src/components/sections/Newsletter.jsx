import React from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="bg-[#184d47] text-white py-20 px-8 md:px-16 rounded-t-3xl"
    >
      {/* Heading */}
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-fg-20">
          Join the <span className="text-amber-300">Natural Glow</span> Family 🌸
        </h2>

        <p className="text-gray-200 leading-relaxed mb-fg-40">
          Subscribe and receive skincare tips, exclusive offers, and early
          access to our latest natural-based products weekly.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        className="flex flex-col md:flex-row items-center justify-center gap-fg-20 mt-fg-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true }}
      >
        {/* Accessible Label */}
        <label htmlFor="email" className="sr-only">Email Address</label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          required
          className="w-full md:w-80 px-6 py-3 rounded-full bg-white text-gray-800 
            placeholder-gray-500 outline-none focus:ring-4 focus:ring-amber-300/50 
            transition shadow-sm"
        />

        <button
          type="submit"
          className="px-10 py-3 bg-amber-400 hover:bg-amber-500 text-white 
            rounded-full font-semibold transition shadow-md hover:shadow-lg"
        >
          Subscribe
        </button>
      </motion.form>
    </section>
  );
}
