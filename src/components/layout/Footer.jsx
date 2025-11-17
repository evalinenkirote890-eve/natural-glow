import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* ---------- BRAND ---------- */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 tracking-tight">
              Natural Glow
            </h4>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Pure. Gentle. Effective skincare made for every beautiful skin.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-5">
              {[
                {
                  icon: <FaFacebookF size={18} />,
                  url: "https://www.facebook.com/naturalglowskincare",
                },
                {
                  icon: <FaTwitter size={18} />,
                  url: "https://twitter.com/naturalglow",
                },
                {
                  icon: <FaInstagram size={18} />,
                  url: "https://www.instagram.com/naturalglow/",
                },
                {
                  icon: <FaGithub size={18} />,
                  url: "https://github.com/naturalglow",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-rose-500 transition-colors duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ---------- RESOURCES ---------- */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 mb-4">
              Resources
            </h5>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-rose-500 transition">About</a></li>
              <li><a href="#" className="hover:text-rose-500 transition">Shop</a></li>
              <li><a href="#" className="hover:text-rose-500 transition">Blog</a></li>
            </ul>
          </div>

          {/* ---------- SUPPORT ---------- */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 mb-4">
              Support
            </h5>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-rose-500 transition">Contact</a></li>
              <li><a href="#" className="hover:text-rose-500 transition">Shipping</a></li>
              <li><a href="#" className="hover:text-rose-500 transition">Returns</a></li>
            </ul>
          </div>

          {/* ---------- SUBSCRIBE ---------- */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 mb-4">
              Join Our Newsletter
            </h5>

            <form className="flex">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="
                  w-full px-4 py-2 border border-gray-300 rounded-l-lg
                  focus:ring-2 focus:ring-rose-300 focus:outline-none
                "
              />
              <button
                className="
                  px-5 py-2 bg-rose-500 text-white rounded-r-lg 
                  hover:bg-rose-600 transition
                "
              >
                Join
              </button>
            </form>

            <div className="mt-4 text-gray-600 text-sm">
              Email:{" "}
              <a
                href="mailto:hello@naturalglow.com"
                className="text-rose-500 hover:underline"
              >
                hello@naturalglow.com
              </a>
            </div>

            <p className="text-gray-600 text-sm mt-1">Phone: +254 712 929 669</p>
            <p className="text-gray-600 text-sm">Nairobi, Kenya</p>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-12 text-center text-gray-500 text-sm tracking-wide">
          © {new Date().getFullYear()} Natural Glow — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
