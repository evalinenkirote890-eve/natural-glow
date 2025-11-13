import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaFlask, FaHandHoldingHeart } from "react-icons/fa";
import ecoPureImg from "../../assets/images/ecopure.jpg";
import glowScienceImg from "../../assets/images/glowscience.jpg";
import fairEarthImg from "../../assets/images/fairearth.jpg";

const Manufacturers = () => {
  const manufacturers = [
    {
      name: "EcoPure Botanicals",
      description:
        "Our main organic extract supplier, known for sustainable farming and cruelty-free processing of natural ingredients.",
      image: ecoPureImg,
      icon: <FaLeaf />,
      iconColor: "text-green-600",
    },
    {
      name: "GlowScience Labs",
      description:
        "Our formulation partner ensuring gentle, dermatologically tested blends with natural antioxidants and vitamins.",
      image: glowScienceImg,
      icon: <FaFlask />,
      iconColor: "text-amber-600",
    },
    {
      name: "FairEarth Co-op",
      description:
        "Community-based group supporting women-led farms and fair-trade harvesting for essential oils and natural clays.",
      image: fairEarthImg,
      icon: <FaHandHoldingHeart />,
      iconColor: "text-rose-600",
    },
  ];

  return (
    <section
      id="manufacturers"
      className="bg-gradient-to-br from-amber-50 to-rose-50 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-amber-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Trusted Manufacturers 🌿
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We collaborate with certified partners who share our passion for
          sustainability, purity, and innovation — ensuring every Natural Glow
          product meets the highest standards of care and quality.
        </p>

        {/* Manufacturer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {manufacturers.map((m, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* ✅ Image with Lazy Loading */}
              <img
                src={m.image}
                alt={`${m.name} image`}
                loading="lazy"
                decoding="async"
                className="w-full h-48 object-cover group-hover:opacity-90 transition"
              />

              {/* 🌿 Icon Overlay */}
              <div
                className={`absolute top-4 left-4 text-5xl bg-white/80 p-3 rounded-full shadow ${m.iconColor}`}
              >
                {m.icon}
              </div>

              {/* Card Text */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {m.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturers;