import React, { use } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";

function ProductFilters() {
  const { productList } = use(ProductContext);

  const categories = productList.map((product) => {
    return product.category;
  });
  const uniqueCategories = [...new Set([...categories])];

  return (
    <div className="flex md:flex-row flex-col justify-start items-center gap-4 md:gap-6 bg-white shadow-sm mb-2 p-4 rounded-lg">
      <h3 className="font-semibold text-xl">Filters</h3>
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
      <h2 className="-mr-5">Categories</h2>
      <select className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
        <option value="">All</option>
        {uniqueCategories.map((category,index) => (
          <option key={index} value="category">
            {category[0].toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductFilters;
