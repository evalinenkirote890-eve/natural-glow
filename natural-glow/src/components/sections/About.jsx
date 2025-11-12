import React from "react";
import productsImg from "../../assets/images/products.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-glow-light/10">
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
          <h2 className="text-3xl font-bold text-glow-dark mb-4">
            About <span className="text-glow-light">Natural Glow</span>
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            At <span className="font-semibold text-glow-dark">Natural Glow</span>, we create
            gentle, nature-powered skincare crafted to nourish your skin and
            enhance its natural radiance. Each product is thoughtfully made with
            sustainable ingredients and a touch of care — so you can glow with
            confidence, naturally.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            From soothing creams to revitalizing serums, our formulas are inspired
            by the earth’s purest elements. We are passionate about providing
            clean, cruelty-free, and effective skincare solutions that help you
            feel beautiful in your own skin — every single day.
          </p>

          <button className="bg-glow-dark text-white px-6 py-3 rounded-full hover:bg-glow-light hover:text-glow-dark transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;