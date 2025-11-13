import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import customerImg from "../../assets/images/customer.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-rose-50">
      <div className="container mx-auto px-6 text-center">
        {/* 🌸 Section Heading */}
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What Our <span className="text-rose-500">Customers</span> Say
        </motion.h2>

        {/* 💬 Testimonial Card */}
        <motion.div
          className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg hover:shadow-rose-100 transition duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* ✅ Lazy-loaded Image */}
          <motion.img
            src={customerImg}
            alt="Happy customer"
            loading="lazy"
            decoding="async"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* ⭐ Rating */}
          <div className="flex justify-center mb-4 text-rose-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#f43f5e" stroke="#f43f5e" />
            ))}
          </div>

          {/* 🗨 Quote */}
          <motion.p
            className="text-gray-600 mb-6 leading-relaxed italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            “I absolutely love Natural Glow! My skin has never felt this fresh
            and smooth. The products smell amazing and are so gentle — truly a
            self-care essential!”
          </motion.p>

          {/* 👩 Customer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-800 text-lg">Amelia K.</h3>
            <p className="text-sm text-gray-500">Nairobi, Kenya</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;