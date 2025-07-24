import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/banner/MainBanner";
import ProductList from "../components/ProductList";
import CartPage from "./Cart";
import ProductFilters from "../components/ProductFilter";

function Homepage() {
  return (
    <div>
      {/* header component */}
      <Header></Header>
      {/* main page */}
      <div>
        <MainBanner />
        <ProductFilters />
        <ProductList />
      </div>
    </div>
  );
}

export default Homepage;
