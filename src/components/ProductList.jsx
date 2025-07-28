// ProductList.jsx
// This component displays a list of products, fetched from an API, and allows adding them to the cart.
import React, { use } from "react";
import { CartContext } from "../context/CartProvider";
import { ProductContext } from "../context/ProductContext";
import useFetchAllItem from "../hooks/useFetchAllItem";
import ProductCard from "./productCard/ProductCard";

function ProductList() {
  // Fetch all products from the API and populate the product context
  useFetchAllItem();
  // Access the product context to get the filtered product list
  const productContext = use(ProductContext);
  // Access the cart context to get the addToCart function
  const { addToCart } = use(CartContext);

  return (
    <div className="mx-auto px-8 py-8">
      {/* Section title */}
      <h2 className="mb-6 font-bold text-2xl">Our Products</h2>
      {/* Product grid layout */}
      <div className="justify-center items-center gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* If the filtered product list is not empty, render each product as a ProductCard. Otherwise, show a loading message. */}
        {productContext.productFilteredList.length > 0 ? (
          productContext.productFilteredList.map((product,index) => (
            <ProductCard key={index} addToCart={addToCart} product={product} />
          ))
        ) : (
          <h1>No Product.</h1>
        )}
      </div>
    </div>
  );
}

export default ProductList;
