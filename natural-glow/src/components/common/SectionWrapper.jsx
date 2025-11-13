import React from "react";

const SectionWrapper = ({ 
  children, 
  className = "", 
  id 
}) => {
  return (
    <section
      id={id}
      className={`
        max-w-7xl mx-auto
        px-6 md:px-12 lg:px-20
        py-16 md:py-24
        relative z-10
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;