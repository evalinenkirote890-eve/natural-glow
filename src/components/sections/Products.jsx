import React from "react";
import { motion } from "framer-motion";
import Card from "../common/Cards";

import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

export default function Products() {
  // Data List — clean, reusable, IYF standard
  const products = [
    {
      image: product1,
      title: "Hydrating Glow Cream",
      description:
        "A nourishing botanical blend infused with rose essence and aloe vera for deep hydration and long-lasting radiance.",
    },
    {
      image: product2,
      title: "Natural Radiance Serum",
      description:
        "Antioxidant-packed vitamin serum that repairs, brightens, and restores a natural youthful glow.",
    },
    {
      image: product3,
      title: "Soothing Clay Mask",
      description:
        "Mineral-rich detoxifying mask that calms irritation, purifies pores, and enhances skin balance.",
    },
  ];

  return (
    <section
      id="products"
      className="py-24 md:py-32 bg-rose-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">

        {/* ===============================
            SECTION TITLE
        ================================= */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Featured <span className="text-rose-500">Products</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-16 md:mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Skincare designed with science + nature.  
          Each product is dermatologist-tested and crafted to bring out your natural glow.
        </motion.p>

        {/* ===============================
            PRODUCT GRID
        ================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
