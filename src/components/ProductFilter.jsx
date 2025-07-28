// ProductFilter.jsx
// This component provides UI controls to filter and sort the product list by category and other criteria.
import React, { use, useRef } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";

function ProductFilters() {
  // Access product list and filter setters from context
  const { productList, setProductFilteredList } = use(ProductContext);

  // Ref for the category select dropdown
  const categoryRef = useRef(null);
  const sortRef = useRef(null);

  // Extract all categories from the product list
  const categories = productList.map((product) => {
    return product.category;
  });

  // Get unique categories for the dropdown
  const uniqueCategories = [...new Set([...categories])];

  // Handler for category dropdown change
  function categoryChangehandler() {
    const selectedValue = categoryRef.current.value;

    setProductFilteredList((prev) => {
      return productList.filter((product) => {
        if (selectedValue != "all") {
          return product.category === selectedValue;
        } else {
          return productList;
        }
      });
    });
  }

  return (
    <div className="flex md:flex-row flex-col justify-start items-center gap-4 md:gap-6 bg-white shadow-sm mb-2 p-4 rounded-lg">
      
      {/* Sort dropdown (UI only, not yet functional) */}
      <div className="hidden flex items-center gap-2">
        <FaSortAmountDown className="text-gray-500" />
        <select
          ref={sortRef}
          className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="">Relevance</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Category filter dropdown */}
      <h2 className="-mr-5">Categories</h2>
      <select
        ref={categoryRef}
        className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        onChange={categoryChangehandler}
      >
        {/* Option to show all products */}
        <option value="all" selected>
          All
        </option>
        {/* Render unique categories as dropdown options */}
        {uniqueCategories.map((category, index) => (
          <option key={index} value={category}>
            {category[0].toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductFilters;
