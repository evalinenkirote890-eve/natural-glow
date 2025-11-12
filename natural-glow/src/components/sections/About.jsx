import React from "react";
import productsImg from "../../assets/images/products.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1">
          <img
            src={productsImg}
            alt="Natural Glow Products"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About <span className="text-rose-500">Natural Glow</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Natural Glow is committed to creating high-quality skincare
            products that celebrate the beauty of nature. Our formulas are made
            with natural ingredients to nourish, protect, and enhance your skin’s
            natural radiance — so you can glow confidently, every day.
          </p>
          <button className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;