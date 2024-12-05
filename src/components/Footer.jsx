import React from "react";
import { Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com/KafuiNuts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com/KafuiNuts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:wastealert@example.com"
            className="hover:text-green-300 transition"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-sm text-center">
          &copy; {new Date().getFullYear()} Waste Alert. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
