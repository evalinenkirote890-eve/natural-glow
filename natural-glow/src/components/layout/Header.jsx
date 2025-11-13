import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          Natural<span className="text-amber-500">Glow</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-amber-500 transition">Home</a>
          <a href="#about" className="hover:text-amber-500 transition">About</a>
          <a href="#features" className="hover:text-amber-500 transition">Features</a>
          <a href="#products" className="hover:text-amber-500 transition">Products</a>
          <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-amber-400 text-white p-2 rounded-lg focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-4 space-y-3 text-center font-medium shadow-md">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block hover:text-amber-500">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-amber-500">About</a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="block hover:text-amber-500">Features</a>
          <a href="#products" onClick={() => setMenuOpen(false)} className="block hover:text-amber-500">Products</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-amber-500">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;