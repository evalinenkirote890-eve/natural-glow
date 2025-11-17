 import React from "react";
import PropTypes from "prop-types";

const Card = ({ image, title, text, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
      
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-[#184d47] mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {text}
        </p>

        {description && (
          <p className="text-gray-500 text-xs mt-3 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Card;
