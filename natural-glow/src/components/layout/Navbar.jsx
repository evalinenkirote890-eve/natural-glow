import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-rose-600">Natural Glow</h1>

        {/* Nav Links (HORIZONTAL) */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-rose-600 cursor-pointer">Home</li>
          <li className="hover:text-rose-600 cursor-pointer">Products</li>
          <li className="hover:text-rose-600 cursor-pointer">About</li>
          <li className="hover:text-rose-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;