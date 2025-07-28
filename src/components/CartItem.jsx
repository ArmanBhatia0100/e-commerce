// CartItem.jsx
// This component represents a single item in the shopping cart, allowing quantity adjustment and removal.
import React, { use } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartProvider";

// Props:
// - product: the product object in the cart
// - onQuantityChange: function to handle quantity changes
// - onRemove: function to handle item removal (not used, removal handled via context)
function CartItem({ product, onQuantityChange, onRemove }) {
  // Access the deleteFromCart function from cart context
  const { deleteFromCart } = use(CartContext);
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      {/* Product image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="rounded w-24 h-24 object-cover"
      />
      <div className="flex-1">
        {/* Product title */}
        <h3 className="font-semibold">{product.title}</h3>
        {/* Shortened product description */}
        <p className="text-gray-500 text-sm truncate">
          {product.description.slice(0, 20)}
        </p>
        {/* Product price */}
        <p className="mt-1 font-semibold text-blue-600">${product.price}</p>
      </div>
      <div className="flex items-center gap-2">
        {/* Quantity input */}
        <input
          type="number"
          min="1"
          value={product.qty}
          onChange={(e) => onQuantityChange(product.id, Number(e.target.value))}
          className="py-1 border rounded w-16 text-center"
        />
        {/* Remove item button */}
        <button
          onClick={() => deleteFromCart(product.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Remove item"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
