import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <h1 className="text-white text-xl font-semibold">
          Natural<span className="text-amber-300">Glow</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#home" className="text-gray-200 hover:text-white transition">
            Home
          </a>
          <a href="#about" className="text-gray-200 hover:text-white transition">
            About
          </a>
          <a href="#features" className="text-gray-200 hover:text-white transition">
            Features
          </a>
          <a href="#contact" className="text-gray-200 hover:text-white transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;