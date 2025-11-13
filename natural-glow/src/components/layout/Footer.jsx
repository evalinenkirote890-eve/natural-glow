import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <h3 className="footer-logo">PureGlow Skincare</h3>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/pureglowskincare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/pureglowskin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/pureglow_skincare/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/pureglowskincare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="footer-links">
          <div>
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Mission & Vision</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4>Products</h4>
            <ul>
              <li><a href="#">Glow Cream</a></li>
              <li><a href="#">Herbal Serum</a></li>
              <li><a href="#">Essential Oils</a></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:hello@pureglow.com">hello@pureglow.com</a>
              </li>
              <li>Phone: +254 712 929 669</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} PureGlow Skincare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;