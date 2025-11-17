import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaSpa, FaShieldAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "100% Botanical Ingredients",
      desc: "Formulated using clean, organic plant extracts that nourish your skin safely.",
    },
    {
      icon: <FaSpa />,
      title: "Dermatologist Approved",
      desc: "Every product is clinically tested for sensitivity, hydration, and effectiveness.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Non-Toxic",
      desc: "Free from parabens, artificial fragrances and harmful preservatives.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="max-w-6xl mx-auto text-center px-6 md:px-12">

        {/* ------------------ TITLE ------------------ */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight"
        >
          Why Choose{" "}
          <span className="text-[var(--brand-primary)]">Natural Glow</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-gray-600 max-w-xl mx-auto mt-6 leading-relaxed"
        >
          Clean. Safe. Effective. Our products blend nature and science to give
          your skin the radiance it deserves.
        </motion.p>

        {/* ------------------ FEATURES GRID ------------------ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-fg-60 mt-fg-70">

          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              className="bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] rounded-3xl p-10 text-center hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-[var(--brand-primary)] text-5xl mb-fg-30 flex justify-center">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {f.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
