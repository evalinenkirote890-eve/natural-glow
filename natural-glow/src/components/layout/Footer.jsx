import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Natural Glow</h3>
          <p className="text-sm leading-relaxed">
            PureGlow is your trusted skincare partner — where natural ingredients meet radiant beauty.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-amber-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Our Products</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Contact</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-amber-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-500 transition"><FaGithub /></a>
          </div>
          <p className="mt-4 text-sm">Email: hello@naturalglow.com</p>
          <p className="text-sm">Phone: +254 712929669</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-gray-500 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Natural Glow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;