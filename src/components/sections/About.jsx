import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";
import productImage from "../../assets/images/products.jpg"; 

export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6 md:px-10">

        {/* LEFT — TEXT */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight mb-8">
            We Bring Out Your{" "}
            <span className="text-[var(--brand-primary)]">
              Natural Glow ✨
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
            At <span className="font-semibold text-[var(--brand-primary)]">
              Natural Glow
            </span>, we believe your skin deserves gentle, radiant care powered
            entirely by nature. Our products nourish, restore, and highlight your
            natural beauty — without harsh ingredients.
          </p>

          {/* Key Points */}
          <div className="space-y-4 text-gray-700 mb-10">
            <p className="flex gap-2">
              <span className="font-semibold text-[var(--brand-primary)]">
                🌿 Glow Consultation:
              </span>
              Personalized skincare guidance designed to help your skin thrive.
            </p>

            <p className="flex gap-2">
              <span className="font-semibold text-[var(--brand-primary)]">
                🌸 Natural Ingredient Blends:
              </span>
              Pure organic extracts crafted for soothing, safe nourishment.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            text="Learn More"
            variant="primary"
            onClick={() => alert("Discover more about Natural Glow!")}
          />
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src={productImage}
            alt="Natural Glow Product Collection"
            loading="lazy"
            decoding="async"
            className="w-full max-w-lg rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] object-cover"
          />
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
