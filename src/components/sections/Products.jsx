import React from "react";
import { motion } from "framer-motion";
import Card from "../common/Cards";

import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

export default function Products() {
  const products = [
    {
      image: product1,
      title: "Hydrating Glow Cream",
      price: "$29",
      description:
        "A nourishing botanical blend infused with rose essence and aloe vera for deep hydration and long-lasting radiance.",
    },
    {
      image: product2,
      title: "Natural Radiance Serum",
      price: "$39",
      description:
        "Antioxidant-packed vitamin serum that repairs, brightens, and restores a natural youthful glow.",
    },
    {
      image: product3,
      title: "Soothing Clay Mask",
      price: "$24",
      description:
        "Mineral-rich detoxifying mask that calms irritation, purifies pores, and enhances skin balance.",
    },
  ];

  return (
    <section
      id="products"
      className="pt-28 pb-24 md:pt-32 md:pb-32 bg-rose-50"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
              className="transform transition-all duration-300 
                         hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>

                <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* PRICE */}
                <p className="text-rose-500 font-semibold text-lg mt-4">
                  {item.price}
                </p>

                {/* BUTTON */}
                <button className="mt-4 w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600 transition shadow-sm">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
