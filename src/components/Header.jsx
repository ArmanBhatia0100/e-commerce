import React, { use } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

function Header() {
  const { cartItems } = use(CartContext);
  return (
    <header className="flex justify-between items-center bg-white shadow-md px-4 py-3">
      {/* Logo */}
      <Link to="/">
        <div className="font-bold text-gray-800 text-xl">MyStore</div>
      </Link>
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
        <div className="-top-4 left-12 relative flex justify-center bg-slate-700 rounded-3xl w-4 h-fit font-bold text-white">
          {cartItems.length}
        </div>
        <Link to="cart">
          <button
            type="button"
            className="hover:text-blue-500 transition-colors"
            aria-label="Cart"
          >
            <FaShoppingCart size={24} />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
