import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-rose-100 p-6 text-center transition duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
        />
      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;