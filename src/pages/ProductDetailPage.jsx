import React, { useState } from 'react';
import { FaStar, FaCartPlus } from 'react-icons/fa';

function ProductDetailPage() {
  // Static product data (replace with real data later)
  const product = {
    id: 1,
    title: 'Wireless Headphones',
    price: 99,
    category: 'Electronics',
    material: 'Plastic',
    rating: 4.5,
    stock: 25,
    shortDescription: 'High-quality wireless sound and comfortable design.',
    description: 'These wireless headphones offer exceptional audio quality with deep bass and crisp treble. Lightweight design makes them comfortable for long listening sessions. Features noise cancellation, Bluetooth 5.0, and 20-hour battery life.',
    thumbnail: 'https://dummyimage.com/500x500/000/fff&text=Headphones',
    images: [
      'https://dummyimage.com/500x500/000/fff&text=Headphones',
      'https://dummyimage.com/500x500/111/fff&text=Side+View',
      'https://dummyimage.com/500x500/222/fff&text=Back+View',
    ],
  };

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log('Added to cart:', { ...product, quantity });
  };

  return (
    <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mx-auto px-4 py-8 container">
      
      {/* Left: Product Images */}
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="shadow mb-4 rounded-lg w-full h-[400px] object-cover"
        />
        <div className="flex gap-2">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className="border rounded hover:ring-2 hover:ring-blue-500 w-20 h-20 object-cover cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div>
        <h1 className="mb-2 font-bold text-3xl">{product.title}</h1>
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center text-yellow-500">
            {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
              <FaStar key={i} />
            ))}
          </span>
          <span className="text-gray-600 text-sm">{product.rating} / 5</span>
          <span className="text-green-600 text-sm">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
        </div>
        <p className="mb-4 font-semibold text-blue-600 text-xl">${product.price.toFixed(2)}</p>
        <p className="mb-4 text-gray-700">{product.shortDescription}</p>
        <p className="mb-6 text-gray-600 text-sm">{product.description}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2 mb-6">
          <label htmlFor="quantity" className="font-medium text-sm">Quantity:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="py-1 border rounded w-16 text-center"
          />
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 mb-4 px-6 py-2 rounded text-white transition-colors"
        >
          <FaCartPlus />
          Add to Cart
        </button>

        {/* Additional Info */}
        <div className="mt-4 text-gray-600 text-sm">
          <p><span className="font-medium">Category:</span> {product.category}</p>
          <p><span className="font-medium">Material:</span> {product.material}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
