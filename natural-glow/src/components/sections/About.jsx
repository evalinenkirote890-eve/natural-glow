import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";
import productImage from "../../assets/images/products.jpg"; // ✅ Adjust path as needed

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* ✅ Left Text Side */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            We Bring Out Your{" "}
            <span className="text-[#A45733]">Natural Glow ✨</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold text-[#A45733]">Natural Glow</span>, we believe
            your skin deserves gentle, radiant care powered by nature.
            Our products are made to nurture, restore, and highlight your
            natural beauty — inside and out.
          </p>

          <div className="space-y-3 text-gray-700 mb-8">
            <p>
              <span className="font-semibold text-[#A45733]">🌿 Glow Consultation:</span>{" "}
              Get personalized skincare advice to help you achieve a healthy,
              radiant glow.
            </p>
            <p>
              <span className="font-semibold text-[#A45733]">🌸 Natural Ingredient Blends:</span>{" "}
              Our formulas combine organic extracts for safe, effective,
              and soothing skin nourishment.
            </p>
          </div>

          <Button
            text="Learn More"
            variant="primary"
            onClick={() => alert("Discover more about Natural Glow!")}
          />
        </motion.div>

        {/* ✅ Right Image Side with Animation */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={productImage}
            alt="Natural Glow products"
            className="w-full max-w-md rounded-2xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;