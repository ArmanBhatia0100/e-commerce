import React, { use } from "react";
import { CartContext } from "../context/CartProvider";
import { ProductContext } from "../context/ProductContext";
import useFetchAllItem from "../hooks/useFetchAllItem";
import ProductCard from "./productCard/ProductCard";

function ProductList() {
  //fetching the product from the api
  useFetchAllItem();
  // getting the products from the context
  const productContext = use(ProductContext);
  const { addToCart } = use(CartContext);


  return (
    <div className="mx-auto px-8 py-8">
      <h2 className="mb-6 font-bold text-2xl">Our Products</h2>
      <div className="justify-center items-center gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* if the product list is not empty show products */}
        {productContext.productList.length > 0 ? (
          productContext.productList.map((product,index) => (
            <ProductCard key={index} addToCart={addToCart} product={product} />
          ))
        ) : (
          <h1>Loading Products</h1>
        )}
      </div>
    </div>
  );
}

export default ProductList;
