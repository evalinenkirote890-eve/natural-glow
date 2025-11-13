import React from "react";
import { FaLeaf, FaFlask, FaHandHoldingHeart } from "react-icons/fa";

const Manufacturers = () => {
  return (
    <section
      id="manufacturers"
      className="bg-gradient-to-br from-amber-50 to-rose-50 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
          Our Trusted Manufacturers 🌿
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We collaborate with certified partners who share our passion for
          sustainability, purity, and innovation — ensuring that every Natural Glow
          product meets the highest standards of care and quality.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <div className="text-amber-600 text-5xl mb-4 flex justify-center">
              <FaLeaf />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              EcoPure Botanicals
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our main organic extract supplier, known for sustainable farming
              and cruelty-free processing of natural ingredients.
            </p>
          </div>

          
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <div className="text-amber-600 text-5xl mb-4 flex justify-center">
              <FaFlask />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              GlowScience Labs
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our formulation partner ensuring gentle, dermatologically tested
              blends with natural antioxidants and vitamins.
            </p>
          </div>

          
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <div className="text-amber-600 text-5xl mb-4 flex justify-center">
              <FaHandHoldingHeart />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              FairEarth Co-op
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Community-based group supporting women-led farms and fair-trade
              harvesting for essential oils and natural clays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturers;