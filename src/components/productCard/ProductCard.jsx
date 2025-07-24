import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="flex flex-col bg-white shadow hover:shadow-lg p-4 rounded-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="mb-4 rounded-md w-full h-48 object-cover"
      />
      <h3 className="mb-1 font-semibold text-lg">{product.title}</h3>
      <p className="mb-2 text-gray-500 text-sm truncate">{product.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="font-semibold text-blue-600">${product.price}</span>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white text-sm transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
