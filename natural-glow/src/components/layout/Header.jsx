import React from "react";

const Header = () => (
  <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
      {/* Logo */}
      <h1 className="text-white text-2xl font-bold tracking-wide">
        Natural<span className="text-amber-300">Glow</span>
      </h1>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-10 text-gray-200">
        {["Home", "About", "Features", "Products", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition">
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      <button className="md:hidden text-amber-300 text-2xl">☰</button>
    </div>
  </header>
);

export default Header;