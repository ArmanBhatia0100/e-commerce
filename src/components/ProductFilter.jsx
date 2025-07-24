import React from 'react';
import { FaSortAmountDown } from 'react-icons/fa';

function ProductFilters() {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-6 bg-white shadow-sm mb-2 p-4 rounded-lg">
      
      {/* Sort */}
      <div className="flex items-center gap-2">
        <FaSortAmountDown className="text-gray-500" />
        <select className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Categories */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-2">
        <h4 className="text-gray-600 text-sm">Categories:</h4>
        <button className="hover:bg-blue-600 px-3 py-1 border border-gray-300 rounded-full hover:text-white text-sm transition-colors">All</button>
        <button className="bg-blue-600 px-3 py-1 border border-gray-300 rounded-full text-white text-sm">Electronics</button>
        <button className="hover:bg-blue-600 px-3 py-1 border border-gray-300 rounded-full hover:text-white text-sm transition-colors">Accessories</button>
        <button className="hover:bg-blue-600 px-3 py-1 border border-gray-300 rounded-full hover:text-white text-sm transition-colors">Clothing</button>
      </div>

      {/* Materials */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-2">
        <span className="text-gray-600 text-sm">Materials:</span>
        <button className="hover:bg-green-600 px-3 py-1 border border-gray-300 rounded-full hover:text-white text-sm transition-colors">Leather</button>
        <button className="hover:bg-green-600 px-3 py-1 border border-gray-300 rounded-full hover:text-white text-sm transition-colors">Metal</button>
        <button className="hover:bg-green-600 px-3 py-1 border border-gray-300 rounded-full hover:text-white text-sm transition-colors">Plastic</button>
      </div>
    </div>
  );
}

export default ProductFilters;
