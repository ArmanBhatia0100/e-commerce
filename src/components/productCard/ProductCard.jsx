import React from 'react';

function ProductCard() {
  // Hardcoded values from your JSON
  const product = {
    id: 78,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    description: "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    brand: "Apple",
    price: 1999.99,
    discountPercentage: 4.69,
    rating: 3.65,
    stock: 24,
    thumbnail: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
  };

  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <div className="flex flex-col bg-white shadow hover:shadow-lg p-4 rounded-lg transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="mb-4 rounded-md w-full h-48 object-cover"
      />

      <h3 className="mb-1 font-semibold text-lg truncate">{product.title}</h3>

      <p className="mb-2 text-gray-500 text-sm line-clamp-2">
        {product.description}
      </p>

      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 text-sm">Brand: {product.brand}</span>
        <span className="text-gray-500 text-sm">Stock: {product.stock}</span>
      </div>

      <div className="flex items-center mb-2">
        <span className="font-medium text-yellow-500 text-sm">
          ⭐ {product.rating.toFixed(1)}
        </span>
      </div>

      <div className="flex items-center space-x-2 mt-auto">
        <span className="font-semibold text-blue-600">${discountedPrice}</span>
        {product.discountPercentage > 0 && (
          <span className="text-gray-400 text-sm line-through">${product.price.toFixed(2)}</span>
        )}
      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 mt-3 px-3 py-1 rounded text-white text-sm transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
