import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaFlask, FaHandHoldingHeart } from "react-icons/fa";

// Local images
import ecoPureImg from "../../assets/images/ecopure.jpg";
import glowScienceImg from "../../assets/images/glowscience.jpg";
import fairEarthImg from "../../assets/images/fairearth.jpg";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.18, ease: "easeOut" },
  }),
};

export default function Manufacturers() {
  const manufacturers = [
    {
      name: "EcoPure Botanicals",
      description:
        "Organic extract supplier focused on sustainable farming, ethical harvesting, and cruelty-free processing.",
      image: ecoPureImg,
      icon: <FaLeaf />,
      iconColor: "text-green-600",
    },
    {
      name: "GlowScience Labs",
      description:
        "Dermatology-approved formulation partner specializing in antioxidant-rich, skin-safe natural blends.",
      image: glowScienceImg,
      icon: <FaFlask />,
      iconColor: "text-amber-600",
    },
    {
      name: "FairEarth Co-op",
      description:
        "Fair-trade women-led farming collective producing natural oils, clays, and plant-based actives.",
      image: fairEarthImg,
      icon: <FaHandHoldingHeart />,
      iconColor: "text-rose-600",
    },
  ];

  return (
    <section
      id="manufacturers"
      className="bg-gradient-to-br from-amber-50 to-rose-50 py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Trusted Manufacturers 🌿
        </motion.h2>

        <motion.p
          className="text-gray-700 max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We partner with certified producers who uphold sustainability,
          purity, and innovation — ensuring every Natural Glow product is crafted
          with care and integrity.
        </motion.p>

        {/* Manufacturer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-14">
          {manufacturers.map((m, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative group"
            >
              {/* Image */}
              <img
                src={m.image}
                alt={`${m.name} factory`}
                loading="lazy"
                decoding="async"
                className="w-full h-52 object-cover group-hover:opacity-95 transition-opacity"
              />

              {/* Icon Overlay */}
              <div
                className={`absolute top-4 left-4 text-4xl md:text-5xl bg-white/85 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg ${m.iconColor}`}
              >
                {m.icon}
              </div>

              {/* Text */}
              <div className="p-8 text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                  {m.name}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
