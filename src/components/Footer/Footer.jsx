import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / Name */}
        <div className="footer-brand">
          <h2>Kherraz Maroua</h2>
          <p>Frontend Developer & Designer</p>
        </div>

        {/* Navigation Links */}
        <ul className="footer-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/kherraz-maroua-9b30822a1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:kh.mar0uua@gmail.com">
            <MdEmail />
          </a>
          <a
            href="https://www.instagram.com/kherraz_maroua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kherraz Maroua. All rights reserved.</p>
      </div>
    </footer>
  );
}
