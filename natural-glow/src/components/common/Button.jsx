import React from "react";

const Button = ({ text, onClick, variant = "primary" }) => {
  const baseStyle =
    "px-6 py-3 rounded-full font-medium transition duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-rose-500 text-white hover:bg-rose-600 shadow-md hover:shadow-lg",
    outline:
      "border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white shadow-sm",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {text}
    </button>
  );
};

export default Button;