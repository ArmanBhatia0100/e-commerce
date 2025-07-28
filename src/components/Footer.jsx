// Footer.jsx
// This component renders the footer section with branding, social media links, and copyright.
import React from "react";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-gray-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo & company description */}
          <div className="md:w-1/3 md:text-left text-center">
            <h2 className="mb-2 font-bold text-white text-2xl">E-comm</h2>
            <p className="text-gray-400 text-sm">
              Innovating the future, one step at a time. Delivering quality
              software solutions with passion.
            </p>
          </div>

          {/* Social media icons section */}
          <div className="flex justify-center md:justify-end space-x-6 md:w-1/3">
            {/* LinkedIn icon */}
            <a
              href="https://www.linkedin.com/in/arman-bhatia/"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
                <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11 19h-3v-9h3zm-1.5-10.3a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm13.5 10.3h-3v-4.8c0-1.1-.4-1.8-1.3-1.8-.7 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.8h-3v-9h3v1.3a3.1 3.1 0 0 1 2.8-1.5c2 0 3.5 1.3 3.5 4v5.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright section at the bottom */}
        <div className="mt-8 pt-4 border-gray-700 border-t text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} ArmanBhatia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
