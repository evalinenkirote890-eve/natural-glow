import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#184d47] text-white py-16 px-8 md:px-16 text-center rounded-t-3xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Join the Natural Glow Family 🌸
      </h2>
      <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
        Subscribe to receive skincare tips, exclusive offers, and early access
        to our latest natural products.
      </p>

      <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-80 px-5 py-3 rounded-full text-gray-800 outline-none focus:ring-2 focus:ring-amber-400"
          required
        />
        <button
          type="submit"
          className="bg-amber-400 hover:bg-amber-500 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;