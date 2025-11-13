import React from "react";
import { motion } from "framer-motion";
import Card from "../common/Cards";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

const Products = () => {
  const productData = [
    {
      image: product1,
      title: "Hydrating Glow Cream",
      description:
        "A nourishing formula infused with rose and aloe to deeply hydrate and brighten your skin.",
    },
    {
      image: product2,
      title: "Natural Radiance Serum",
      description:
        "Packed with antioxidants and vitamins to give your skin a healthy, lasting glow.",
    },
    {
      image: product3,
      title: "Soothing Clay Mask",
      description:
        "Detoxifies, refreshes, and balances your skin using natural minerals and botanical extracts.",
    },
  ];

  return (
    <section id="products" className="py-20 bg-rose-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 🌸 Section Heading */}
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Featured <span className="text-rose-500">Products</span>
        </motion.h2>

        {/* 🧴 Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* ✅ Pass Lazy Loading to Each Card Image */}
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
};

export default Products;