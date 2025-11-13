import React from "react";
import PropTypes from "prop-types";

const Card = ({ image, title, text,description }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-[#184d47] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;