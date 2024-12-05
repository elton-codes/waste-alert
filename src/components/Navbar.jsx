import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Waste Alert
        </div>

        {/* Menu for Larger Screens */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-green-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-green-300 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#impact" className="hover:text-green-300 transition">
              Impact
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-300 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
          >
            Partner With Us
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800 text-white">
          <ul className="space-y-4 p-4">
            <li>
              <a href="#home" className="hover:text-green-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#problem-solution" className="hover:text-green-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-green-300 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:text-green-300 transition">
                Impact
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-300 transition">
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block bg-green-700 text-center text-white px-4 py-2 rounded hover:bg-green-800 transition"
              >
                Partner With Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
