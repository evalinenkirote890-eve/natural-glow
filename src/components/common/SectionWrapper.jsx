import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = ({
  children,
  id,
  className = "",
  bgImage,        
  overlay = true, 
}) => {
  return (
    <section
      id={id}
      className={`
        relative w-full
        py-16 md:py-24
        ${className}
      `}
    >
      
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      )}

      
      {bgImage && overlay && (
        <div className="absolute inset-0 bg-black/10 md:bg-black/20 backdrop-blur-[1px]"></div>
      )}

    
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative z-10
          max-w-7xl
          mx-auto
          px-6 md:px-12 lg:px-20
          flex flex-col
        "
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
