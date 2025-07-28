import React, { use } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartProvider";

function CartItem({ product, onQuantityChange, onRemove }) {
  const { deleteFromCart } = use(CartContext);
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="rounded w-24 h-24 object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-gray-500 text-sm truncate">
          {product.description.slice(0, 20)}
        </p>
        <p className="mt-1 font-semibold text-blue-600">${product.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={product.quantity}
          onChange={(e) => onQuantityChange(product.id, Number(e.target.value))}
          className="py-1 border rounded w-16 text-center"
        />
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
