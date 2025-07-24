import React, { use } from "react";
import ProductCard from "./productCard/ProductCard";
import useFetchItem from "../hooks/useFetchItem";
import { ProductContext } from "../context/ProductContext";

function ProductList() {
  //fetching the product from the api
  useFetchItem();
  // getting the products from the context
  const context = use(ProductContext);


  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // Later: add logic to update cart
  };

  return (
    <div className="mx-auto px-8 py-8">
      <h2 className="mb-6 font-bold text-2xl">Our Products</h2>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {/* if the product list is not empty show products */}
        {context.productList.length > 0 ? (
          context.productList.map((product) => <ProductCard />)
        ) : (
          <h1>Loading Products</h1>
        )}
      </div>
    </div>
  );
}

export default ProductList;
