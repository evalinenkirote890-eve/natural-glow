import React from "react";
import logo from "../../assets/images/logo.png"; // sample local logo

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Brand Logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
              Natural Glow
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-gray-700 hover:text-[var(--brand-primary)] transition">
              Home
            </a>
            <a className="text-gray-700 hover:text-[var(--brand-primary)] transition">
              Products
            </a>
            <a className="text-gray-700 hover:text-[var(--brand-primary)] transition">
              About
            </a>
            <a className="text-gray-700 hover:text-[var(--brand-primary)] transition">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-[var(--brand-primary)] text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg hover:bg-opacity-90 transition">
            Shop Now
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-white shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
