import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-glow-dark">
          Natural<span className="text-glow-light">Glow</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-glow-light transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-glow-light transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-glow-light transition duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-glow-light transition duration-300">
              Products
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-glow-light transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-glow-dark focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-glow-light transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-glow-light transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="hover:text-glow-light transition duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={() => setIsOpen(false)}
                className="hover:text-glow-light transition duration-300"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-glow-light transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;