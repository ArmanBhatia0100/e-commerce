import React from 'react';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className="flex justify-between items-center bg-white shadow-md px-4 py-3">
      {/* Logo */}
      <div className="font-bold text-gray-800 text-xl">
        MyStore
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 text-gray-600">
        <button
          type="button"
          className="hover:text-blue-500 transition-colors"
          aria-label="Account"
        >
          <FaUserCircle size={24} />
        </button>
        <button
          type="button"
          className="hover:text-blue-500 transition-colors"
          aria-label="Cart"
        >
          <FaShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
