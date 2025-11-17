import React from "react";
import { motion } from "framer-motion";

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ariaLabel,
}) => {
  const baseStyle =
    "px-6 md:px-8 py-3 md:py-3.5 rounded-full font-semibold tracking-wide transition-colors duration-300 select-none";

  const variants = {
    primary:
      "bg-rose-500 text-white shadow-md hover:bg-rose-600 hover:shadow-lg",
    outline:
      "border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white shadow-sm",
    soft:
      "bg-rose-100 text-rose-600 hover:bg-rose-200 shadow-sm hover:shadow-md",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel || text}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
