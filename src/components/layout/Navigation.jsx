import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/images/logo.png";

export default function Navigation(){
  const [open, setOpen] = useState(false);
  return (
    <nav className="max-w-container-xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Natural Glow" className="w-10 h-10 object-contain" />
        <div>
          <div className="text-lg font-semibold text-neutralDark">Natural Glow</div>
          <div className="text-xs text-neutralDark/60 -mt-1">Botanical Skincare</div>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <NavLink to="/" className={({isActive}) => isActive ? "text-primary font-medium" : "text-gray-700"}>Home</NavLink>
        <NavLink to="/products" className={({isActive}) => isActive ? "text-primary font-medium" : "text-gray-700"}>Products</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "text-primary font-medium" : "text-gray-700"}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "text-primary font-medium" : "text-gray-700"}>Contact</NavLink>
        <Link to="/products" className="px-4 py-2 bg-primary text-white rounded-lg">Shop Now</Link>
      </div>

      <button className="md:hidden" onClick={()=>setOpen(!open)}>
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute right-4 top-16 bg-white rounded-lg p-4 shadow-lg w-48 md:hidden">
          <NavLink to="/" onClick={()=>setOpen(false)} className="block py-2">Home</NavLink>
          <NavLink to="/products" onClick={()=>setOpen(false)} className="block py-2">Products</NavLink>
          <NavLink to="/about" onClick={()=>setOpen(false)} className="block py-2">About</NavLink>
          <NavLink to="/contact" onClick={()=>setOpen(false)} className="block py-2">Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
