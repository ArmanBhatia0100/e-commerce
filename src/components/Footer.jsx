import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-gray-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo & Description */}
          <div className="md:w-1/3 md:text-left text-center">
            <h2 className="mb-2 font-bold text-white text-2xl">E-comm</h2>
            <p className="text-gray-400 text-sm">
              Innovating the future, one step at a time. Delivering quality
              software solutions with passion.
            </p>
          </div>


          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-6 md:w-1/3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.1.85A5.3 5.3 0 0 0 22.4.4a10.6 10.6 0 0 1-3.3 1.26 5.3 5.3 0 0 0-9 4.82A15 15 0 0 1 1.6 2.15a5.3 5.3 0 0 0 1.64 7.06 5.27 5.27 0 0 1-2.4-.66v.06a5.3 5.3 0 0 0 4.3 5.2 5.3 5.3 0 0 1-2.4.1 5.3 5.3 0 0 0 4.94 3.68A10.6 10.6 0 0 1 1 19.5a15 15 0 0 0 8.13 2.37c9.76 0 15.1-8.1 15.1-15.1 0-.23 0-.46-.02-.68A10.8 10.8 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
                <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11 19h-3v-9h3zm-1.5-10.3a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm13.5 10.3h-3v-4.8c0-1.1-.4-1.8-1.3-1.8-.7 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.8h-3v-9h3v1.3a3.1 3.1 0 0 1 2.8-1.5c2 0 3.5 1.3 3.5 4v5.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-4 border-gray-700 border-t text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
