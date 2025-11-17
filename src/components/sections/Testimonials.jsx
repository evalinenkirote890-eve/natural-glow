import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import customerImg from "../../assets/images/customer.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-rose-50 to-rose-100/40"
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 🌸 Heading */}
        <motion.h2
          id="testimonial-heading"
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Loved By Our  
          <span className="text-rose-600"> Beautiful Customers</span>
        </motion.h2>

        {/* 💬 Testimonial Card */}
        <motion.figure
          className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl
                     hover:shadow-2xl transition-all duration-300 border border-rose-100"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Customer Image */}
          <motion.img
            src={customerImg}
            alt="Smiling satisfied customer"
            loading="lazy"
            decoding="async"
            className="w-24 h-24 rounded-full mx-auto mb-5 object-cover shadow-md"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* ⭐ Rating */}
          <div
            className="flex justify-center gap-1 mb-5 text-rose-500"
            aria-label="5 out of 5 star rating"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                strokeWidth={1.5}
                fill="#f43f5e"
                stroke="#f43f5e"
              />
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            className="text-gray-600 text-lg md:text-xl leading-relaxed italic mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            “Natural Glow completely transformed my skincare routine.  
            My skin is smoother, brighter, and feels incredibly clean.  
            I can’t imagine a day without these products!”
          </motion.blockquote>

          {/* Customer Info */}
          <motion.figcaption
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-800 text-lg">Amelia K.</h3>
            <p className="text-sm text-gray-500">
              Verified Customer — Nairobi, Kenya
            </p>
          </motion.figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default Testimonials;
